import { useState } from 'react'
import React from 'react'
import './List1.css'
import { QuestionCard } from './component/QuestionCard'

const List2 = () => {
  //问卷列表数据
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublish: false },
    { id: 'q2', title: '问卷2', isPublish: true },
    { id: 'q3', title: '问卷3', isPublish: false },
    { id: 'q4', title: '问卷4', isPublish: true },
  ])

  const add = () => {
    const r = Math.random().toString().slice(-3)
    setQuestionList(
      questionList.concat({
        id: 'q' + r,
        title: '问卷' + r,
        isPublish: false,
      })
    )
  }

  const del = (id: string) => {
    setQuestionList(
      questionList.filter(item => {
        if (item.id === id) return false
        return true
      })
    )
  }

  const publish = (id: string) => {
    setQuestionList(
      questionList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isPublish: true,
          }
        }
        return item
      })
    )
  }
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(item => {
          const { id, title, isPublish } = item
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublish={isPublish}
              deleteFn={del}
              publishFn={publish}
            />
          )
        })}
      </div>

      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  )
}

export default List2

import { FC } from 'react'
import React from 'react'
import './List1.css'
import { QuestionCard } from './component/QuestionCard'
import { title } from 'node:process'

const List1 = () => {
  //问卷列表数据
  const questionList = [
    { id: 'q1', title: '问卷1', isPublish: false },
    { id: 'q2', title: '问卷2', isPublish: true },
    { id: 'q3', title: '问卷3', isPublish: false },
    { id: 'q4', title: '问卷4', isPublish: true },
  ]

  return (
    <div>
      <h1>问卷列表页</h1>
      {questionList.map(item => {
        const { id, title, isPublish } = item
        // 两种都行，第一种可读性更好
        return <QuestionCard key={id} id={id} title={title} isPublish={isPublish} />
        // return <QuestionCard key={id} {...item} />
      })}
    </div>
  )
}

export default List1

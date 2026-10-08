import { FC } from 'react'
import React from 'react'
import './App1.css'

const List1 = () => {
  //问卷列表数据
  const questionList = [
    { id: 'q1', title: '问卷1', isPublish: false },
    { id: 'q2', title: '问卷2', isPublish: true },
    { id: 'q3', title: '问卷3', isPublish: false },
    { id: 'q4', title: '问卷4', isPublish: true },
  ]

  const edit = (id: string) => {
    console.log('edit', id)
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      {questionList.map(item => {
        const { id, title, isPublish } = item
        return (
          <div key={id} className="list-item">
            <strong>{title}</strong>
            &nbsp;
            {isPublish ? (
              <span style={{ color: 'green' }}>已发布</span>
            ) : (
              <span style={{ color: 'red' }}>未发布</span>
            )}
            &nbsp;
            <button
              onClick={() => {
                edit(id)
              }}
            >
              编辑
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default List1

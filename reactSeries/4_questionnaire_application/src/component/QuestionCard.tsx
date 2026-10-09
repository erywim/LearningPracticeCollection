import classNames from 'classnames'
import '../List1.css'
import React from 'react'
import styles from './QuestionCard.module.scss'

type PropsType = {
  id: string
  title: string
  isPublish: boolean
  deleteFn?: (id: string) => void
  publishFn?: (id: string) => void
}

export const QuestionCard = (props: PropsType) => {
  const { id, title, isPublish, deleteFn, publishFn } = props
  const edit = (id: string) => {
    console.log('edit', id)
  }
  //   const itemClass = classNames({ [styles['list-item']]: true, [styles.publish]: isPublish })
  const itemClass1 = classNames(styles['list-item'], { [styles.publish]: isPublish })
  return (
    <div key={id} className={itemClass1}>
      <strong>{title}</strong>
      &nbsp;
      {isPublish ? (
        <span className={styles.publish} style={{ color: 'green' }}>
          已发布
        </span>
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
      &nbsp;
      <button onClick={() => deleteFn?.(id)}>删除</button>
      &nbsp;
      <button onClick={() => publishFn?.(id)}>发布</button>
    </div>
  )
}

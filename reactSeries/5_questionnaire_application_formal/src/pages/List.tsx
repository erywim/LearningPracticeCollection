import { useState } from 'react'
import styles from './List.module.scss'
import { QuestionCard } from '../components/QuestionCard'

const rawQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublish: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 12:34',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublish: true,
    isStar: false,
    answerCount: 56,
    createAt: '3月11日 12:34',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublish: false,
    isStar: true,
    answerCount: 57,
    createAt: '3月12日 12:34',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublish: false,
    isStar: false,
    answerCount: 58,
    createAt: '3月13日 12:34',
  },
]

export const List = () => {
  //问卷列表数据
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}> (搜索) </div>
      </div>
      <div className={styles.content}>
        {questionList.map(item => {
          const { id } = item
          return <QuestionCard key={id} {...item} />
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

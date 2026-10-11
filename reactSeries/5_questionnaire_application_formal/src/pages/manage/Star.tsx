import { useState } from 'react'
import styles from './common.module.scss'
import { QuestionCard } from '../../components/QuestionCard'
import { Empty, Typography } from 'antd'

const rawQuestionList = [
  {
    id: 'q2',
    title: '问卷2',
    isPublish: true,
    isStar: true,
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
]

const { Title } = Typography

export const Star = () => {
  //问卷列表数据
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}> (搜索) </div>
      </div>
      <div className={styles.content}>
        {questionList.length == 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map(item => {
            const { id } = item
            return <QuestionCard key={id} {...item} />
          })}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  )
}

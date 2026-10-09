import styles from './QuestionCard.module.scss'

type PropsType = {
  id: string
  title: string
  isPublish: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}

export const QuestionCard = (props: PropsType) => {
  const { id, title, isPublish, answerCount, createAt } = props
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublish ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
          &nbsp;
          <span>答卷:{answerCount}</span>
          &nbsp;
          <span>{createAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  )
}

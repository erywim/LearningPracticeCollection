import { Link, useNavigate } from 'react-router-dom'
import styles from './QuestionCard.module.scss'
import { Button, Divider, Space, Tag } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'

type PropsType = {
  id: string
  title: string
  isPublish: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}

export const QuestionCard = (props: PropsType) => {
  const nav = useNavigate()
  const { id, title, isPublish, answerCount, createAt, isStar } = props
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublish ? `/question/stat/${id}` : `/question/edit/${id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <Space className={styles.right}>
          {isPublish ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
          <span>答卷:{answerCount}</span>
          <span>{createAt}</span>
        </Space>
      </div>
      <Divider style={{ margin: '12px' }} />
      <div className={styles['button-container']}>
        <Space className={styles.left}>
          <Button
            size="small"
            onClick={() => nav(`/question/edit/${id}`)}
            icon={<EditOutlined />}
            type="text"
          >
            编辑问卷
          </Button>
          <Button
            size="small"
            onClick={() => nav(`/question/stat/${id}`)}
            icon={<LineChartOutlined />}
            type="text"
            disabled={!isPublish}
          >
            数据统计
          </Button>
        </Space>
        <div className={styles.right}>
          <Space>
            <Button size="small" type="text" icon={<StarOutlined />}>
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button size="small" type="text" icon={<CopyOutlined />}>
              复制
            </Button>
            <Button size="small" type="text" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

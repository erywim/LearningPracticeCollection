import { Link, useNavigate } from 'react-router-dom'
import styles from './QuestionCard.module.scss'
import { Button, Divider, message, Modal, Popconfirm, Space, Tag } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
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
const { confirm } = Modal
export const QuestionCard = (props: PropsType) => {
  const nav = useNavigate()

  function dumplicate() {
    message.info('复制成功')
  }

  function del() {
    confirm({
      title: '确定删除该问卷？',
      okText: '确定',
      cancelText: '取消',
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success('删除成功'),
    })
  }

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
            <Popconfirm title="确认复制？" cancelText="取消" okText="确认" onConfirm={dumplicate}>
              <Button size="small" type="text" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>
            <Button size="small" type="text" icon={<DeleteOutlined />} onClick={del}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

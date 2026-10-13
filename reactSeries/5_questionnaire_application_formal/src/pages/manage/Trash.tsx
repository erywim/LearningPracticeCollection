import { useState } from 'react'
import styles from './common.module.scss'
import { QuestionCard } from '../../components/QuestionCard'
import { Empty, Table, Typography, Tag, Button, Space, Modal, message } from 'antd'
import { ListSearch } from '../../components/ListSearch'

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
const { confirm } = Modal

export const Trash = () => {
  //问卷列表数据
  const [questionList, setQuestionList] = useState(rawQuestionList)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  function del() {
    confirm({
      content: '删除后不可恢复',
      okText: '确认',
      cancelText: '取消',
      title: '彻底删除问卷',
      onOk: () => message.success(`删除${selectedIds}`),
    })
  }
  const columnConfig = [
    {
      title: '标题',
      dataIndex: 'title',
      // key: 'title' // 循环列表的key，如果不写则默认取数据源的dataIndex的值，也就是具体标题，只要列中没有重复使用一个元素就可以省略
    },
    {
      title: '是否发布',
      dataIndex: 'isPublish',
      render: (isPublish: boolean) => {
        return isPublish ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
    },
  ]

  const TableElem = (
    <>
      <div>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button type="text" danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>

      <Table
        dataSource={questionList}
        columns={columnConfig}
        pagination={false}
        rowKey={q => q.id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectRows => {
            setSelectedIds(selectRows as string[])
          },
        }}
      />
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length == 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  )
}

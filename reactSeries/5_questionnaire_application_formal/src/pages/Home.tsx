import { Button, Typography } from 'antd'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 ｜ 在线投票</Title>
        <Paragraph>已累计创建问卷 10 份，发布问卷 2 份，收到答卷 100 份</Paragraph>
        <Button type="primary">开始使用</Button>
      </div>
    </div>
  )
}

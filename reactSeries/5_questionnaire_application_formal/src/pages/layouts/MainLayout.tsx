import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { Logo } from '../../components/Logo'
import { UserInfo } from '../../components/UserInfo'
const MainLayout = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>问卷系统 练习</Footer>
    </Layout>
  )
}

export default MainLayout

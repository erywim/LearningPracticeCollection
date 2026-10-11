import { FormOutlined } from '@ant-design/icons'
import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
// import Title from 'antd/es/skeleton/Title';

const { Title } = Typography

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

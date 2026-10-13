import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, message, Space, Typography } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Login.module.scss'
import { REGISTER_PATHNAME } from '../router/index'
import { useEffect } from 'react'

const { Title } = Typography

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

function remeberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

function deleteUser() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

function getUserInfo(): { username: string; password: string } {
  return {
    username: localStorage.getItem(USERNAME_KEY) || '',
    password: localStorage.getItem(PASSWORD_KEY) || '',
  }
}

export const Login = () => {
  // const nav = useNavigate()
  const [form] = Form.useForm()

  function onFinish(values: any) {
    console.log(values)

    const { username, password, remeber } = values || {}
    if (remeber) {
      remeberUser(username, password)
    } else {
      deleteUser()
    }
  }

  useEffect(() => {
    const { username, password } = getUserInfo()
    form.setFieldsValue({ username, password })
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{ remeber: true }}
          form={form}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item name="remeber" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
            {/* valuePropName 需要明确写明，其他组件都内部有对应名字都属性所以可以省略，但是这里，name是remeber，属性状态是checked，对应不上所以需要写明*/}
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

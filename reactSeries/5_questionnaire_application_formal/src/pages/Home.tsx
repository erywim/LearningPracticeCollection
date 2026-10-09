import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
  const nav = useNavigate()

  const clickHandler = () => {
    nav({
      pathname: '/login',
      search: 'a=100',
    })
  }

  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={clickHandler}>登录</button>
        <Link to="/register?b=20">注册</Link>
      </div>
    </div>
  )
}

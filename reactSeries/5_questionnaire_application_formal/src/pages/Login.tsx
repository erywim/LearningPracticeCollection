import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const nav = useNavigate()

  const clickHandler = () => {
    nav(-1)
  }

  return (
    <div>
      <p>Login</p>
      <div>
        <button onClick={clickHandler}>返回</button>
      </div>
    </div>
  )
}

import { Outlet } from 'react-router-dom'

const QuestionLayout = () => {
  return (
    <>
      <div>QuestionLayout </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default QuestionLayout

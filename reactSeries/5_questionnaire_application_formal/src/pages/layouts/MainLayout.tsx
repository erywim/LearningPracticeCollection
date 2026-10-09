import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <div>ML header </div>
      <div>
        <Outlet />
      </div>
      <div>ML footer </div>
    </>
  )
}

export default MainLayout

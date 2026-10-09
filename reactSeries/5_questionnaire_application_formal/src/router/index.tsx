import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../pages/layouts/MainLayout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { NotFound } from '../pages/NotFound'
import ManageLayout from '../pages/layouts/ManageLayout'
import { List } from '../pages/manage/List'
import { Star } from '../pages/manage/Star'
import { Trash } from '../pages/manage/Trash'
import QuestionLayout from '../pages/layouts/QuestionLayout'
import { Edit } from '../pages/question/Edit'
import { Stat } from '../pages/question/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },

      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: '*', // 404 路由配置，都写在最后（上面未匹配到的兜底）
        element: <NotFound />,
      },
    ],
  },

  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
])

export default router

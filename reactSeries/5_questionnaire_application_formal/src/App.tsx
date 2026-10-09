import { RouterProvider } from 'react-router-dom'
import './App.css'
import routerConfig from './router/index'
function App() {
  return <RouterProvider router={routerConfig} />
}

export default App

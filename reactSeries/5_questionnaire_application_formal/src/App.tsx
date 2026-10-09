import './App.css'
import { List } from './pages/List'

function App() {
  const a = 123
  console.log(a)
  return (
    <>
      <div className="App">
        <h1>问卷 init</h1>
        <List />
      </div>
    </>
  )
}

export default App

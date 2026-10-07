import './App.css'
import { HelloWrold } from '../components/1.HelloWrold/index';
import { Hooks } from '../components/2.BasicState/index';

// function App() {

//   return (
//     <HelloWrold 
//     title='你好世界' 
//     // 通过属性接受内容
//     render={(count) => <div style={{ color: 'red' }}>函数内容-{count}</div>} 
//     // 传入回调函数
//     changeFunc={(count) => console.log(count)}
//     />
//   )
// }

function App(){
  return (
    <Hooks/>
  )
}

export default App

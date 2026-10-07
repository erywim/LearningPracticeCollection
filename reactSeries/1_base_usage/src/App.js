import { Fragment } from 'react/jsx-runtime';
import './App.css';
import { useState } from 'react';

function App() {
  // const divContent = 'hello world'
  // const divTitle = '标题'
  // const flag = true
  // let divContent = null
  // if(flag){
  //   divContent = <span>flag 是true</span>
  // }else{
  //   divContent = <p>flag 是false</p>
  // }
  // return (
  //   <div title={divTitle}>
  //     {divContent}
  //   </div>
  // );



  // const list = [
  //   {id: 1 , name:'张三'},
  //   {id: 2 , name:'李四'},
  //   {id: 3 , name:'王五'}
  // ]

  // const listMap = list.map(item =>(
  //   <Fragment key={item.id}>
  //     <li>{item.name}</li>
  //     <li>----------------</li>      
  //   </Fragment>
  // ))

  // return (
  //   <ul>{listMap}</ul>
  // )

  // const [content,setContent] = useState('默认标签内容')

  const [data,setData] = useState({
    title: '默认标题',
    content: '默认内容'
  })

  function handleClick(e){
    setData({
      ...data,
      title:'新标题'
    })
  }

  return (
    <>
      <div title={data.title}>{data.content}</div>
      <button onClick={handleClick}>按钮</button>
    </>
  )

}

export default App;

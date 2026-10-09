import React, { useMemo, useState } from 'react'
export const UseMemoDemo = () => {
  console.log('函数组件被重新加载.....')
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [hello, setHello] = useState('hello')

  const sum = useMemo(() => {
    console.log('memo func call')
    return num1 + num2
  }, [num1, num2])

  return (
    <div>
      <div>sum : {sum}</div>
      <div>
        {num1} <button onClick={() => setNum1(num1 + 1)}>添加num1</button>
        {num2} <button onClick={() => setNum2(num2 + 1)}>添加num2</button>
        <input type="text" value={hello} onChange={e => setHello(e.target.value)} />
      </div>
    </div>
  )
}

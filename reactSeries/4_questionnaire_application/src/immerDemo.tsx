import { produce } from 'immer'
import React, { useState } from 'react'

export const ImmerDemo = () => {
  const [userInfo, setUserInfo] = useState({ name: 'erywim', age: 20 })

  const changeName = () => {
    setUserInfo(
      produce(draft => {
        draft.name = 'eeeeeerywim'
      })
    )
  }

  return (
    <div>
      <div>
        {userInfo.age} - {userInfo.name}
      </div>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}

export const ImmerArrDemo = () => {
  const [arr, setArr] = useState(['x', 'y'])

  const add = () => {
    setArr(
      produce(draft => {
        draft.push('z')
      })
    )

    //没有produce则需要使用concat或者解构拼接的方式
    // setArr(arr.concat('z'))
    // setArr([...arr, 'z'])
  }

  return (
    <div>
      <div>{JSON.stringify(arr)}</div>
      <button onClick={add}>add</button>
    </div>
  )
}

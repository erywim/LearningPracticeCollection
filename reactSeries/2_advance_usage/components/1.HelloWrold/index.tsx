import { useState } from "react"

interface HelloWorldProps {
    title: string
    render?: (count: number) => React.ReactNode
    changeFunc?: (count: number) => void
}

export const HelloWrold = (myProps: HelloWorldProps) => {
    const { title, render, changeFunc } = myProps
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
        // 调用父组件传递进来的回调函数，实现当子元素发生变更之后，父组件可以做出相应的变更
        changeFunc?.(count + 1)
    }

    return (
        <>
            <div>Hello World-{count}</div>
            <p>{title}</p>
            <button onClick={handleCount}>+</button>
            {/* 方式一：通过函数入参向render内容传递内容 */}
            {render?.(count)}
        </>
    )
}
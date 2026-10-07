import { useEffect, useRef, useState } from "react"


export const Hooks = () =>{
    const[count , setCount] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null)
    const handleAdd = () =>{
        setCount(count+1)
    }

    useEffect(() =>{
        console.log(count);
        document.title = `当前计数：${count}`
    },[count])

    useEffect(() => {
        console.log("触发组件渲染")
        inputRef.current?.focus()
    })

    return (
        <div>
            <div> 当前计数 ：{count}</div>
            <button onClick={handleAdd}>+</button>
            <input ref={inputRef}/>
        </div>
    )
}
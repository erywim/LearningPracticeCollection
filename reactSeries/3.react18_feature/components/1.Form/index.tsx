import { useState } from "react"

export const Form = () =>{
    //管理状态
    const [formData,setFormData] = useState({
        username: "",
        password: ""
    })

    //通常react开发，ev对象是需要通过泛型指明
    const handleSubmit = (ev : React.FormEvent<HTMLFormElement>) =>{
        //阻止默认的地址栏跳转动作
        ev.preventDefault()
        console.log(formData)
    }

    return <form onSubmit={handleSubmit}>
        <label>
            用户名：
            <input
                type='text'
                name='username'
                onChange={(ev) => setFormData({...formData,username: ev.target.value})}
            />
        </label>
        <label>
            密码
            <input
                type="password"
                name="password"
                onChange={(ev) => setFormData({...formData,password:ev.target.value})}
            />
        </label>
        <button type="submit">提交</button>
    </form>
}
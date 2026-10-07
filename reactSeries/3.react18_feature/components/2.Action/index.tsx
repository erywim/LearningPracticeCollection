import { useActionState } from "react"
import { useFormStatus } from "react-dom"


const SubmitButton = () => {
    const {pending,data,method} = useFormStatus()
    console.log(pending,data,method)
    return <button type="submit">{pending?'提交中...' : '提交'}</button>
}

export const FormAction = () =>{
        const handleAction = async (prevState:any,formData:FormData) =>{
        console.log([...formData.keys()])//解构出来
        console.log([...formData.values()])//解构出来

        return {
            success:true,
            data:{
               username: formData.get("username"),
               password: formData.get("password")
            }
        }
    }

    const [state , submitAction,isPending] = useActionState(handleAction,null)

    return <form action={submitAction}>
        <label>
            用户名：
            <input
                type='text'
                name='username'
            />
        </label>
        <label>
            密码
            <input
                type="password"
                name="password"
            />
        </label>
        {/* <button type="submit">提交</button> */}
        <SubmitButton/>
    </form>
}
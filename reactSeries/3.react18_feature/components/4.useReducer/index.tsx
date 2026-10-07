import { useReducer } from "react"

const initState = {
    name: 'erywim',
    age: 12
}

type Action =
  | { type: 'changeName'; data: string }
  | { type: 'changeAge'; data: number }

const reducer = (
    state : typeof initState,
    // action: {type : string , data : string | number } 
    action: Action
) => {
   switch(action.type){
    case 'changeName':
        return {
            ...state,
            name: action.data
        }
    case 'changeAge':
        return {
            ...state,
            age: action.data
        }
    default:
        return state
   } 
}

export const UseReducer = () =>{
    const [info,dispatch] = useReducer(reducer,initState);

    return (
        <div>
            <p>info: {info.name} - {info.age}</p>
            <input value={info.name} 
            onChange={(ev) => 
                dispatch({
                    type: 'changeName',
                    data: ev.target.value
                })
            }/>
            <input value={info.age}
            onChange={(ev) =>
                dispatch({
                    type: 'changeAge',
                    data: Number(ev.target.value)
                })
            }/>
        </div>
    )
}


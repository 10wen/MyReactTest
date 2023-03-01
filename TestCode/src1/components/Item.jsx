import { useEffect, useState } from "react"

export default function Item (props) {
    const {todo} = props;
    const [value, setValue] = useState(todo.value)

    const [check, setCheck] = useState(todo.checked)

    const onChange = (e) => {
        props.handleSelect(todo.id, e.target.checked)
        setCheck(e.target.checked)
    }


    return <>
        <li className="item">
            {check + ''}
            <input type="checkbox" checked={check} onChange={onChange}/>
            <input className="itemValue" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>props.handleEdit(props.todo.id,value)}>修改</button>
            <button onClick={()=>props.handleDel(props.todo.id)}>删除</button>
        </li>
    </>
}
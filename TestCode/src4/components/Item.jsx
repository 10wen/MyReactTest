import { useEffect, useState } from "react"

const styles = {
    item: {
      borderBottom: "1px solid blue",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    itemValue: {
      width: "70%",
      height: "30px",
      border: "0",
      outline: "none",
    },
  };

export default function Item (props) {
    const {todo} = props;
    const [value, setValue] = useState(todo.value)

    const [check, setCheck] = useState(todo.checked)

    const onChange = (e) => {
        props.handleSelect(todo.id, e.target.checked)
        setCheck(e.target.checked)
    }
    const handleEdit = () => {
        props.handleEdit(todo.id,value)
    }
    const handleDel = () => {
        props.handleDel(todo.id,value)
    }


    return <>
        <li style={styles.item}>
            <input type="checkbox" checked={check? true: false} onChange={onChange}/>
            <input style={styles.itemValue} type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={handleEdit}>修改</button>
            <button onClick={handleDel}>删除</button>
        </li>
    </>
}
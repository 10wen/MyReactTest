import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { editTodo,deleteOne, saveLocalUserTodoList } from "store/todos";

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

    // const [value, setValue] = useState(todo.value)
    // const [check, setCheck] = useState(todo.checked)

    const {loginUser: user} = useSelector(state => state.userReducer)
    const todosDispatch = useDispatch();

    const handleEdit = (type,id,value) => {
        todosDispatch(editTodo({type,id,value}))
        todosDispatch(saveLocalUserTodoList(user.username))
    }
    const handleDel = () => {
        todosDispatch(deleteOne(todo.id))
        todosDispatch(saveLocalUserTodoList(user.username))
    }

    // const onChange = (e) => {
    //     props.handleSelect(todo.id, e.target.checked)
    //     setCheck(e.target.checked)
    // }
    // const handleEdit = () => {
    //     props.handleEdit(todo.id,value)
    // }
    // const handleDel = () => {
    //     props.handleDel(todo.id,value)
    // }


    return <>
        <li style={styles.item}>
            <input type="checkbox" checked={todo.done ? true:false} onChange={(e) => handleEdit('select',todo.id,e.target.checked)}/>
            <input style={styles.itemValue} type="text" value={todo.value} onChange={(e) => handleEdit('edit',todo.id,e.target.value)}/>
            {/* <input style={styles.itemValue} type="text" value={value} onChange={(e)=>setValue(e.target.value)}/> */}
            {/* <button onClick={handleEdit}>修改</button> */}
            <button onClick={handleDel}>删除</button>
        </li>
    </>
}
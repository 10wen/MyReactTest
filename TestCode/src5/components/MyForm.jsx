import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, saveLocalUserTodoList } from "store/todos";

export default function MyForm(props) {
  const [value, setValue] = useState("todo");

  const {loginUser: user} = useSelector(state => state.userReducer)
  const todosDispatch = useDispatch();

  const handleAddTodo = () => {
    todosDispatch(addTodo({id: nanoid(), value, done: false}))
    todosDispatch(saveLocalUserTodoList(user.username))
    setValue("");
  };
  // const handleAddTodo = () => {
  //   props.handleAdd(value);
  //   setValue("");
  // };

  const MyForm = (
    <div
      style={{
        width: "30vw",
        height: "40px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 20px",
        border: "1px solid blue",
        borderRadius: "8px",
      }}
    >
      <label>任务名：</label>
      <input
        style={{ flex: "1", border: "0", outline: "none" }}
        type="text"
        placeholder="todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleAddTodo}>
        新增
      </button>
    </div>
  );
  return MyForm;
}

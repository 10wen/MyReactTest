import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todosList: [
        // {id: 12, value: 'as', done: false}
    ],
  },
  reducers: {
    addTodo: (state, action) => {
        state.todosList.push(action.payload);
    },
    editTodo: (state, action) => {
        console.log(action);
        const {type, id, value} = action.payload;
        // const newTodoList = 
        state.todosList.map((todo) => {
            if (todo.id === id) {
                if (type === 'edit') todo.value = value;
                else todo.done = value;
            }
            return todo;
        })
        // state.todosList = newTodoList;
    },
    checkOne: (state, action) => {},
    deleteOne: (state, action) => {
        const newTodoList = state.todosList.filter((todo)=> todo.id !== action.payload)
        state.todosList = newTodoList;
    },
    deleteAll: (state, action) => {
        state.todosList = []
    },
    checkAll: (state, action) => {
        const newTodoList = state.todosList.map((todo) => {
            todo.done = action.payload;
            return todo;
        })
        state.todosList = newTodoList;
    },
    getTodos: (state, action) => {},
    setTodos: (state, action) => {},
    initLocalUserTodoList: (state, action) => {
        const localUserTodosList = JSON.parse(localStorage.getItem('localUserTodosList') || "{}");
        state.todosList = localUserTodosList[action.payload] || [];
    },
    saveLocalUserTodoList: (state, action) => {
        const localUserTodosList = JSON.parse(localStorage.getItem("localUserTodosList") || "{}");
        localUserTodosList[action.payload] = state.todosList;
        localStorage.setItem("localUserTodosList", JSON.stringify(localUserTodosList));
    }
  },
});

export const {
  addTodo,
  editTodo,
  checkOne,
  checkAll,
  deleteOne,
  deleteAll,
  getTodos,
  setTodos,
  initLocalUserTodoList,
  saveLocalUserTodoList
} = todosSlice.actions;

export default todosSlice;

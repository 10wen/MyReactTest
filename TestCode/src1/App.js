import logo from './logo.svg';
import './App.css';
import './components/TodoList.css'
import TodoList from 'components/TodoList';
import MyForm from 'components/MyForm';
import { useEffect, useState } from 'react';
import Select from 'components/Select';


function App() {

  // {id: new Date().getTime() ,checked: false, value: '123', complete: false}

  const [data,setData] = useState(JSON.parse(localStorage.getItem('todos') || '[]'));

  // 添加
  const handleAdd = (value) => {
    if (value == "") {
      alert("不能为空！")
    } else {
      setData([...data, {
        id:new Date().getTime() ,checked: false, value: value, complete: false
      }])
    }
  }

  // 删除
  const handleDel = (id) => {
    setData(data.filter((item) => item.id != id))
  }

  // 编辑
  const handleEdit = (id, value) => {
    setData(data.map((item) => {
      if (item.id == id){ 
        item.value = value
      } 
      return item
    }))
  }

  // 单项选择
  const handleSelect = (id,value) => {
    setData(data.map((item) => {
      if (item.id == id) {
        item.checked = value
      }
      return item;
    }))
    // console.log(data);
  }

  // 全选
  const handleSelectAll = (value) => {
    // console.log(value);
    const newData = data.map((item)=>{
      return {...item, checked: value}
    })
    console.log(newData);
    setData(newData)
   
  }

  // 全删
  const handleDelAll = () => {
    setData(data.filter((item) => {
      return item.checked === false;
    }))
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(data))
  },[data])

  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline' style={{marginBottom: '20px'}}>Todo List</h1>

      <MyForm handleAdd={handleAdd}/>

      <TodoList data={data} handleDel={handleDel} handleEdit={handleEdit} handleSelect={handleSelect}/>

      <Select data={data} handleSelectAll={handleSelectAll} handleDelAll={handleDelAll} />
      
    </div>
    
  );
}

export default App;

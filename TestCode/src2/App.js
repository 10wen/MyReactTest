import logo from './logo.svg';
import { Routes, Route, Link, Navigate, useRoutes, useNavigate } from 'react-router-dom';
import './App.css';
import './components/TodoList.css'
import Login from 'pages/Login';
import Dash from 'pages/Dash';
import Todo from 'pages/Todo';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';


const navStyle = {
  nav: {
    width: '100%',
    height: '30px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  li: {
    listStyle: 'none',
    width: '50px',
    height: '30px',
    textAlign: 'center',
    marginRight: '30px',
    backgroundColor: 'rgba(200,200,200,0.3)'
  }
}


function App() {

  // const useroutes = useRoutes([
  //   {
  //     path: '/login',
  //     element: <Login />
  //   }
  // ])
  // 页面直接 {userroutes}

  

  return (
      <div>
        <nav style={navStyle.nav}>
          <li style={navStyle.li}>
            <Link to="/home">Home</Link>
          </li>
          <li style={navStyle.li}>
            <Link to="/login">login</Link>
          </li>
          <li style={navStyle.li}>
            <Link to="dash">dash</Link>
          </li>
          <li style={navStyle.li}>
            <Link to="todo">todo</Link>
          </li>
        </nav>

        <Routes>
          <Route path='/' element={ <Navigate to='/home' />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/dash' element={ <Dash />} />
          <Route path='/todo' element={ <Todo /> } />
          <Route path='/*' element={ <NotFound /> } />
        </Routes>
      </div>
  )
  
}

export default App;

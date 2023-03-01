import { useState } from "react"


const styles = {
    container: {
        width: '30vw',
        height: '150px',
        margin: '100px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #def'
    },

}

export default function Login () {


    const [user, setUser] = useState({username: '', password: ''})

    const nameChange = (e) => {
        setUser({...user, username: e.target.value})
    }
    const passChange = (e) => {
        setUser({...user, password: e.target.value})
    }

    const login = () => {
        if (user.username === '' || user.password === '') {
            alert('not null')
        } else {
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('isLogin', true)
            // 动态路由跳转
            
        }
    }


    return (
        <div className="loginBox" style={styles.container}>
            <h2>Login</h2>
            <div><label>username：</label><input type='text' value={user.username} onChange={nameChange}></input></div>
            <div><label>password：</label><input type='password' value={user.password} onChange={passChange}></input></div>
            <button type="submit" onClick={login}>登录</button>
        </div>
    )
}
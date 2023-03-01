import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    width: "400px",
    height: "200px",
    margin: "100px auto 20px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #def",
    borderRadius: "8px",
  },
  input: {
    outline: "1px solid skyblue",
    borderRadius: "5px",
    padding: "0 10px",
  },
};

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const [form, setForm] = useState({ username: "", password: "" });


  const [localUserList, setLocalUserList] = useState(
    JSON.parse(localStorage.getItem("localUserList") || "[]")
  );

  const hadUser = () => {
    return localUserList.some((item) => item.username === form.username);
  };

  const nameChange = (e) => {
    setForm({ ...form, username: e.target.value });
  };
  const passChange = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const login = () => {
    if (form.username === "" || form.password === "") {
      alert("not null");
    } else {
      if (hadUser()) {
        setUser({ ...form });
        // console.log(user);
        localStorage.setItem("user", JSON.stringify({ ...form }));
        // 动态路由跳转
        navigate("/home");
      } else {
        alert("The user does not exist");
      }
    }
  };

  const register = () => {
    if (form.username === "" || form.password === "") {
      alert("not null");
    } else {
      if (hadUser()) {
        return alert("user already exists");
      }
      setLocalUserList([...localUserList, { ...form }]);
      setIsLogin(!isLogin);
      console.log("注册成功");
    }
  };

  const changeBox = () => {
    setIsLogin(!isLogin);
  };

  //   useEffect(()=>{
  //     // console.log(user);
  //     // debugger;
  //     localStorage.setItem('user', JSON.stringify(user));
  //   },[user])

  useEffect(() => {
    localStorage.removeItem("user");
  });

  useEffect(() => {
    localStorage.setItem("localUserList", JSON.stringify(localUserList));
  }, [localUserList]);

  return (
    <>
      {isLogin ? (
        <div className="container">
          <form>
            <div className="loginBox" style={styles.container}>
              <h2>Login</h2>
              <div>
                <label>username：</label>
                <input
                  style={styles.input}
                  type="text"
                  value={form.username}
                  onChange={nameChange}
                ></input>
              </div>
              <div>
                <label>password：</label>
                <input
                  style={styles.input}
                  type="password"
                  readOnly={form.username == ""}
                  value={form.password}
                  onChange={passChange}
                ></input>
              </div>
              <button type="submit" onClick={login}>
                登录
              </button>
            </div>
            <div
              style={{ width: "400px", margin: "0 auto", textAlign: "center" }}
            >
              <span>还没有账号？</span>
              <span style={{ color: "blue" }} onClick={changeBox}>
                去注册
              </span>
            </div>
          </form>
        </div>
      ) : (
        <div className="container">
          <form>
            <div className="RegisterBox" style={styles.container}>
              <h2>Register</h2>
              <div>
                <label>username：</label>
                <input
                  style={styles.input}
                  type="text"
                  value={form.username}
                  onChange={nameChange}
                ></input>
              </div>
              <div>
                <label>password：</label>
                <input
                  style={styles.input}
                  type="password"
                  value={form.password}
                  onChange={passChange}
                ></input>
              </div>
              <button type="submit" onClick={register}>
                注册
              </button>
            </div>
            <div
              style={{ width: "400px", margin: "0 auto", textAlign: "center" }}
            >
              <span>已有账号？</span>
              <span style={{ color: "blue" }} onClick={changeBox}>
                去登录
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

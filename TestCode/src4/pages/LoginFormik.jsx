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

  // const [form, setForm] = useState({ username: "", password: "" });

  // 使用formik
  const formik = useFormik({
    initialValues: {
        username: '请输入用户名',
        password: '请输入密码'
    },
    validate: values => {
      const errors = {};
      const {username,password} = values;
      if (!username) {
        errors.username = '请输入用户名！';
      }
      if (!password) {
        errors.password = '请输入用户密码！';
      }
      return errors
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      if(isLogin) login();
      else register();
    }
  })

  const [localUserList, setLocalUserList] = useState(
    JSON.parse(localStorage.getItem("localUserList") || "[]")
  );

  const hadUser = () => {
    return localUserList.some((item) => item.username === formik.values.username);
  };

  // const nameChange = (e) => {
  //   setForm({ ...form, username: e.target.value });
  // };
  // const passChange = (e) => {
  //   setForm({ ...form, password: e.target.value });
  // };

  const login = () => {
    const {username,password} = formik.values;
    if (username === "" || password === "") {
      alert("not null");
    } else {
      if (hadUser()) {
        let user = {username,password}
        setUser(user);
        // console.log(user);
        // localStorage.setItem("user", JSON.stringify(user));
        // 动态路由跳转
        setTimeout(()=>{
          navigate("/home");
        },0)
      } else {
        alert("The user does not exist");
      }
    }
  };

  const register = () => {
    const {username,password} = formik.values;
    if (username === "" || password === "") {
      alert("not null");
    } else {
      if (hadUser()) {
        return alert("user already exists");
      }
      setLocalUserList([...localUserList, { username,password }]);
      setIsLogin(!isLogin);
      console.log("注册成功");
    }
  };

  const changeBox = () => {
    setIsLogin(!isLogin);
  };

    useEffect(()=>{
      // console.log(user);
      // debugger;
      localStorage.setItem('user', JSON.stringify(user));
    },[user])

  useEffect(() => {
    localStorage.removeItem("user");
  },[]);

  useEffect(() => {
    localStorage.setItem("localUserList", JSON.stringify(localUserList));
  }, [localUserList]);

  return (
    <>
      {isLogin ? (
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="loginBox" style={styles.container}>
              <h2>Login</h2>
              <div>
                <label htmlFor="username">username：</label>
                <input
                  style={styles.input}
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </div>
              {/* 错误信息提示 */}
              { (formik.touched.username && formik.errors.username) && <p>{formik.errors.username}</p>}
              <div>
                <label htmlFor="password">password：</label>
                <input
                  style={styles.input}
                  type="password"
                  name="password"
                  readOnly={formik.values.username == ""}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </div>
              {/* 错误信息提示 */}
              {(formik.touched.password && formik.errors.password) && <p>{formik.errors.password}</p>}
              <button type="submit" >
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
          <form onSubmit={formik.handleSubmit}>
            <div className="RegisterBox" style={styles.container}>
              <h2>Register</h2>
              <div>
                <label htmlFor="username">username：</label>
                <input
                  style={styles.input}
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </div>
              {/* 错误信息提示 */}
              { (formik.touched.username && formik.errors.username) && <p>{formik.errors.username}</p>}
              <div>
                <label htmlFor="password">password：</label>
                <input
                  style={styles.input}
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </div>
              {/* 错误信息提示 */}
              {(formik.touched.password && formik.errors.password) && <p>{formik.errors.password}</p>}
              <button type="submit">
                注册
              </button>
            </div>
            <div
              style={{ width: "400px", margin: "0 auto", textAlign: "center" }}
            >
              <span>已有账号？</span>
              <span style={{ color: "blue" }}>
                去登录
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

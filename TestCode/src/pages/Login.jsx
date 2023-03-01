import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form, useFormik, useField } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from '../store/user';
import { initLocalUserTodoList } from "store/todos";


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
  form: {
    height: '130px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    outline: "1px solid skyblue",
    borderRadius: "5px",
    padding: "0 10px",
  },
};

// 构建自定义表单控件
function MyInputField({ label, name, ...props }) {
  const [field, meta] = useField({ name });
  return (
    <div style={{height: '65px'}}>
      <label htmlFor="props.id">{label}</label>
      <input style={styles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <p style={{ textAlign: "center", fontSize: '12px' }}>{meta.error}</p>
      ) : null}
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("user") || "{}")
  // );

  const [localUserList, setLocalUserList] = useState(
    JSON.parse(localStorage.getItem("localUserList") || "[]")
  );

  // 使用redux
  // const { loginUser: user } = useSelector(state => state.userReducer);
  const userDispatch = useDispatch();


  // 使用formik结合yup
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(10, "登录名格式不正确") // 验证长度
      .matches(/^[a-zA-Z0-9]{10,16}$/, "不能含特殊字符")
      .required("登录名必填"), // 必传项

    password: Yup.string()
      .min(10, "密码长度不够")
      .matches(
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#%^&*?]).{10,16}$/,
        "密码不够安全"
      )
      .required("密码不能为空"),
  });
  const onSubmit = (values) => {
    if (isLogin) login(values);
    else register(values);
  };


  const hadUser = (username) => {
    return localUserList.some(
      (item) => item.username === username
    );
  };

  const login = (values) => {
    const { username, password } = values;
    if (username === "" || password === "") {
      alert("not null");
    } else {
      if (hadUser(username)) {
        // setUser(user);
        // localStorage.setItem("user", JSON.stringify(user));

        // 使用store
        userDispatch(userLogin({username,password}))
        // 初始化该用户的todos
        userDispatch(initLocalUserTodoList(username))

        // 动态路由跳转
        setTimeout(() => {
          navigate("/home");
        }, 0);
      } else {
        alert("The user does not exist");
      }
    }
  };

  const register = (values) => {
    alert(JSON.stringify(values))
    const { username, password } = values;
    if (username === "" || password === "") {
      alert("not null");
    } else {
      if (hadUser()) {
        return alert("user already exists");
      }
      setLocalUserList([...localUserList, { username, password }]);
      setIsLogin(!isLogin);
      console.log("注册成功");
    }
  };

  const changeBox = () => {
    setIsLogin(!isLogin);
  };
  

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  useEffect(() => {
    userDispatch(userLogin())
  });

  useEffect(() => {
    localStorage.setItem("localUserList", JSON.stringify(localUserList));
  }, [localUserList]);

  return (
    <>
      {isLogin ? (
        <div className="container">
          <div className="loginBox" style={styles.container}>
            <h2>Login</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form style={styles.form}>
                <MyInputField
                  id="username"
                  name="username"
                  label="username:"
                  placeholder="请输入用户名"
                />
                <MyInputField
                  id="password"
                  name="password"
                  type="password"
                  label="password:"
                  placeholder="请输入密码"
                />
                <button type="submit">login</button>
              </Form>
            </Formik>
          </div>
          <div
            style={{ width: "400px", margin: "0 auto", textAlign: "center" }}
          >
            <span>还没有账号？</span>
            <span style={{ color: "blue" }} onClick={changeBox}>
              去注册
            </span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="registerBox" style={styles.container}>
            <h2>Register</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form style={styles.form}>
                <MyInputField
                  id="username"
                  name="username"
                  label="username:"
                  placeholder="请输入用户名"
                />
                <MyInputField
                  id="password"
                  name="password"
                  type="password"
                  label="password:"
                  placeholder="请输入密码"
                />
                <button type="submit">register</button>
              </Form>
            </Formik>
          </div>
          <div
            style={{ width: "400px", margin: "0 auto", textAlign: "center" }}
          >
            <span>已有账号？</span>
              <span style={{ color: "blue" }}>
                去登录
              </span>
          </div>
        </div>
      )}
    </>
  );
}

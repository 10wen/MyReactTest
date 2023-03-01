import logo from "./logo.svg";
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useRoutes,
  useNavigate,
} from "react-router-dom";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import translations from "source/translations";
import i18n from "i18n";
import { useTranslation } from "react-i18next";

import "./App.css";
import Login from "pages/Login";
import Dash from "pages/Dash";
import Todo from "pages/Todo";
import Home from "pages/Home";
import NotFound from "pages/NotFound";


// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init(translations);

const navStyle = {
  nav: {
    width: "100%",
    height: "30px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  li: {
    listStyle: "none",
    width: "50px",
    height: "30px",
    textAlign: "center",
    marginRight: "30px",
    backgroundColor: "rgba(200,200,200,0.3)",
  },
};

function App() {
  // const useroutes = useRoutes([
  //   {
  //     path: '/login',
  //     element: <Login />
  //   }
  // ])
  // 页面直接 {userroutes}

  const [language,setLanguage] = useState('cn')
  const {t} = useTranslation()

  const changeLanguage = (e) => {
    const language = e.target.value;
    setLanguage(language)
    i18n.changeLanguage(language)
    console.log(language);
  }


  return (
    <div>
      <nav style={navStyle.nav}>
        <li style={navStyle.li}>
          <Link to="/home">{t('home')}</Link>
        </li>
        <li style={navStyle.li}>
          <Link to="/login">{t('login')}</Link>
        </li>
        <li style={navStyle.li}>
          <Link to="dash">{t('dash')}</Link>
        </li>
        <li style={navStyle.li}>
          <Link to="todo">{t('todo')}</Link>
        </li>
        <li style={navStyle.li}>
          <div>
            {/* <label>lang</label> */}
            <select value={language} onChange={(e) => changeLanguage(e)}>
              <option value="cn">简</option>
              <option value="hk">繁</option>
              <option value="en">EN</option>
            </select>
          </div>
        </li>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<Dash lang={language} />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

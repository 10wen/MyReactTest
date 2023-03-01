import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Counter from "components/reduxDemo/Counter";
import { useSelector } from "react-redux";



export default function Dash({ lang }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // const [user, setUSer] = useState(JSON.parse(localStorage.getItem('user')));

  
  const {loginUser : user} = useSelector(state => state.userReducer);


  useEffect(() => {
    // if (!user || JSON.stringify(user) === "{}") {
      // alert("please login before do something");
      // navigate("/login");
    // }

    // 使用store
    if (!user || JSON.stringify(user) === "{}") {
      alert("please login before do something");
      navigate("/login");
    }
  });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {lang !== "en" ? (
        <div>
          <div><Counter /></div>
          <span>{t("goto2")}</span>
          <NavLink to="/todo" style={{ color: "blue" }}>
            {t("todos2", { name: user?.username + "'s" })}
          </NavLink>
          <span>{t("page2")}</span>
        </div>
      ) : (
        <></>
      )}

      <div>
        <span>{t("goto")}</span>
        <NavLink to="/todo" style={{ color: "blue" }}>
          {t("user todos", { name: user?.username + "'s" })}
        </NavLink>
        <span>{t("page")}</span>
      </div>
    </div>
  );
}

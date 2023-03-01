import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Dash({lang}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      alert("please login before do something");
      navigate("/login");
    }
  });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {lang !== 'en'? (
        <div>
        <span>{t("goto2")}</span>
        <NavLink to="/todo" style={{ color: "blue" }}>
          {t("todos2", { name: user.username + "'s" })}
        </NavLink>
        <span>{t("page2")}</span>
      </div>
      ) : (<></>)}
      
      <div>
        <span>{t("goto")}</span>
        <NavLink to="/todo" style={{ color: "blue" }}>
          {t("user todos", { name: user.username + "'s" })}
        </NavLink>
        <span>{t("page")}</span>
      </div>
    </div>
  );
}

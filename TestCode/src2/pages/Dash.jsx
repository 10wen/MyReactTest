import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Dash() {
  const navigate = useNavigate();

  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      alert("please login before do something");
      navigate("/login");
    }
  });

  return <div style={{textAlign: 'center', marginTop: '20px'}}><NavLink to='/todo'>goto togo page</NavLink></div>;
}

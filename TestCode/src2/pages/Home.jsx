import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      alert("please login before do something");
      navigate("/login");
    }
  });

  return <div>Home</div>;
}

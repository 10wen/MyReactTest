import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUSer] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    if (!user || JSON.stringify(user) === "{}") {
      alert("please login before do something");
      navigate("/login");
    }
  });

  return <div>Home</div>;
}

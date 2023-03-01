import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardBox: {
    width: "33%",
    border: "1px solid skyblue",
    // borderCollapse: 'collapse'
  },
  title: {
    marginRight: '10px',
    fontWeight: "bold",
  },
};

export default function Home() {
  const navigate = useNavigate();
  // const [user, setUSer] = useState(JSON.parse(localStorage.getItem('user')));
  const { loginUser: user } = useSelector((state) => state.userReducer);

  const [postsData, setPostsData] = useState([]);

  const fetchPostsData = async () => {
    const jsonData = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());
    setPostsData(jsonData);
  };

  // useEffect(() => {
  //   if (!user || JSON.stringify(user) === "{}") {
  //     alert("please login before do something");
  //     navigate("/login");
  //   }
  // });

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>FETCH POSTS DATA</h1>
      <div className="container" style={styles.container}>
        {postsData.map((post) => {
          return (
            <div key={post.id} className="cardBox" style={styles.cardBox}>
              <table style={styles.table}>
                <thead>
                  <tr style={{display: 'flex',justifyContent: 'space-around'}}>
                    <td>
                      <span style={styles.title}>ID:</span>
                      <span>{post.id}</span>
                    </td>
                    <td>
                      <span style={styles.title}>UserID:</span>
                      <span>{post.userId}</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ colspan: "2" }}>
                      <span style={styles.title}>Title:</span>
                      <span>{post.title}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ colspan: "2" }}>
                      <span style={styles.title}>Body:</span>
                      <span>{post.body}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post";
import { CreatePost } from "./components/CreatePost";
import Homework from "./components/Homework";
import { CreateHomework } from "./components/CreateHomework";
import { Button } from "./ui/button";
axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const [posts, setPosts] = useState([]);
  const [homeworks, setHomeworks] = useState([]);
  const [active, setActive] = useState("posts");
  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPosts(res.data);
    });
    axios.get("/homeworks").then((res) => {
      setHomeworks(res.data);
    });
  }, []);
  return (
    <div class="container mx-auto mt-5">
      <Button className={active === "posts" ? "primary" : "secondary"} onClick={() => setActive("posts")}>Posts</Button> <Button className={active === "homeworks" ? "primary" : "secondary"} onClick={() => setActive("homeworks")} class="btn">homeworks</Button>
      {active === "posts" ? 
      <div>
        {posts.map((post) => (
          <Post {...post} />
        ))}

      <CreatePost addPost={(post) => setPosts([...posts, post])} />
  
      </div>
    :
    <div>
        {homeworks.map((post) => (
          <Homework {...post} />
        ))}

      <CreateHomework addPost={(homework) => setHomeworks([...homeworks, homework])} />
  
      </div>
    }
   </div>
  );
}

export default App;

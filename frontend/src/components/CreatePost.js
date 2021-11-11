import axios from "axios";
import { useState } from "react";
import { Button } from "../ui/button";

export function CreatePost({ addPost }) {
  const [post, setPost] = useState({});
  const submitPost = () => {
    axios.post("/posts", { ...post, date: new Date() }).then((res) => {
      addPost(res.data);
    });
  };
  return (
    <div className="shadow border rounded-10 bg-white m-3 p-5">
      <h1 className="text-3xl">Create New Post</h1>
      <p>Title:</p>
      <p>
        <input
          value={post.title}
          className="border-2 border-gray-400"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </p>
      <p>Body:</p>
      <p>
        <textarea
          rows="4"
          cols="50"
          className="border-2 border-gray-400"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        >
          {post.body}
        </textarea>
      </p>

      <Button className="primary" onClick={() => submitPost()}>
        Submit
      </Button>
    </div>
  );
}

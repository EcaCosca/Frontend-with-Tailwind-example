import axios from "axios";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Post(props) {
  const [post, setPost] = useState(props);
  const [enableEdit, setEnableEdit] = useState(false);

  const [deleted, setDeleted] = useState(false);
  const deletePost = () => {
    axios.delete(`/posts/${post.id}`).then((res) => {
      setDeleted(true);
    });
  };
  const editCancel = () => {
    setEnableEdit(false);
    setPost(props);
  };
  const editSave = () => {
    axios.put(`/posts/${post.id}`, { ...post }).then((res) => {
      setPost(res.data);
      setEnableEdit(false);
    });
  };
  if (deleted) return <div></div>;
  if (enableEdit)
    return (
      <div className="shadow border rounded-10 bg-white m-3 p-5">
        <h1 className="inline">
          <input
            className="border-2 border-gray-400"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </h1>{" "}
        <small className="inline text-gray-500">
          {new Date(post.date).toLocaleString("en-US")}
        </small>
        <p>
          <textarea
            className="border-2 mt-2 border-gray-400"
            rows="4"
            cols="50"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          >
            {post.body}
          </textarea>
        </p>
        <Button className="primary" onClick={() => editSave()}>
          Save
        </Button>
        <Button className="primary" onClick={() => editCancel()}>
          Cancel
        </Button>
      </div>
    );
  return (
    <div className="shadow border rounded-10 bg-white m-3 p-5">
      <h1 className="inline text-2xl font-semibold">{post.title}</h1>{" "}
      <small className="inline ml-5 text-gray-500">
        — {new Date(post.date).toLocaleString("en-US")}
      </small>
      <p>{post.body}</p>
      <Button className="primary" onClick={() => setEnableEdit(true)}>
        Edit
      </Button>
      <Button className="primary" onClick={() => deletePost()}>
        Delete
      </Button>
    </div>
  );
}

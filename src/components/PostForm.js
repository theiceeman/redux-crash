import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../actions/postActions";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch()

  let Submit = (e) => {
    e.preventDefault();
    let postData = {
      title,
      body,
    };

    dispatch(createPost(postData))

  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="">Title:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Body: </label>
          <br />
          <textarea
            name="body"
            onChange={(e) => setBody(e.target.value)}
            id=""
            cols="30"
            rows="10"
            value={body}
          ></textarea>
        </div>
        <br />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default PostForm;

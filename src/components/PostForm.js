import { useEffect, useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  let Submit = (e) => {
    e.preventDefault();
    let post = {
      title,
      body,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
    .then((res) => res.json())
    .then(data => console.log(data));
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

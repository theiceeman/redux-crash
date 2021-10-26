import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
const Posts = () => {
  /*     
  // To set values that will be changing for the app to monitor and update it in real time.
  const [posts, setPosts] = useState({});
 */

  // Will run once, only on component mount[loads for the first time]
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data));

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {/* {posts && posts.length > 0
        ? posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        : null} */}
    </div>
  );
};

export default connect(null, {fetchPosts})(Posts);

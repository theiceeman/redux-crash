import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, updatePost } from "../actions/postActions";
const Posts = () => {
  /*     
  // To set values that will be changing for the app to monitor and update it in real time.
  const [posts, setPosts] = useState({});
 */

  const dispatch = useDispatch()

  const postReducer = useSelector(state => state.postReducer)
  const {items, item} = postReducer

    // Will run once, only on component mount[loads for the first time]
    useEffect(() => {
      dispatch(fetchPosts())
  }, []);

  useEffect(() => {
    // console.log(item,"fgfg")
    // items.unshift(item)

    dispatch(updatePost(items,item))
  }, [item])





  // Will run once, only on component mount[loads for the first time]
  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((res) => res.json())
  //   //   .then((data) => setPosts(data));
  //   // const state = useSelector(state => state.state)
  //   fetchPosts();
  // }, []);

  return (
    <div>
      <h1>Posts</h1>
      {items && items.length > 0
        ? items.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Posts;

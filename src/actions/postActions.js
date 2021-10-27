import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
    console.log('fetching...')
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => dispatch({
          type: FETCH_POSTS,
          payload: posts
      }));
}

export const createPost = post => dispatch => {
    console.log('fetching...')
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
    .then((res) => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));
}

export const updatePost = (allPosts, post) => dispatch => {
    // console.log(allPosts)
    // console.log(post)
    allPosts.unshift(post)
    console.log(allPosts)
    dispatch({
        type: FETCH_POSTS,
        payload: allPosts
    })
}
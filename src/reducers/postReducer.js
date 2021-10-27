import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action);
      return {
        ...state,
        items: action.payload,
      };

    case NEW_POST:
      // console.log("new post reducer");
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}

// export  function newPostReducer (state = initialState, action) {
//   switch (action.type) {
//     case NEW_POST:
//         console.log('new post reducer')
//       return {
//         ...state,
//         item: action.payload,
//       };

//     default:
//       return state;
//   }
// }

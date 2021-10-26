import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import { Provider } from "react-redux";
import store from "./store";

// const store = createStore(()=>[],{}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostForm />
          <hr />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;

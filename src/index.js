import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { Provider } from "react-redux";
import firebase from "./firebase";

const store = createStore(rootReducer);
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import "./styles/main.scss";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer.js";
import { rootEpic } from "./epics/rootEpic.js";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware), applyMiddleware(thunk))
  );
  epicMiddleware.run(rootEpic);
  return store;
}

const rootContainer = document.getElementById("root");

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter
      basename={
        process.env.NODE_ENV !== "production" ? "/" : "/guthub-profiles"
      }
    >
      <App />
    </BrowserRouter>
  </Provider>,
  rootContainer
);

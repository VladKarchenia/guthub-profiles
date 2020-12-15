import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import "./styles/main.scss";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer.js";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);
const rootContainer = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/guthub-profiles">
            <App />
        </BrowserRouter>
    </Provider>,
    rootContainer
);

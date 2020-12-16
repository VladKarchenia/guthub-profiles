import React, { Fragment } from "react";
import Home from "../Home/Home.jsx";
import { About } from "../About/About.jsx";
import { Navbar } from "../Navbar/Navbar.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Fragment>
    );
}

export default App;

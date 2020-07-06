import React, { Component } from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import SignUp from "./auth/SignUp";
import Feature from "./Feature";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </div>
    );
  }
}

import React, { Component } from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Welcome} />
      </div>
    );
  }
}

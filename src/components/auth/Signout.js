import React, { Component } from "react";
import { connect } from "react-redux";

import { signout } from "../../actions/index";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>We are sorry to see you go!</div>;
  }
}

export default connect(null, { signout })(Signout);

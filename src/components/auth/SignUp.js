import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { signup } from "../../actions/index";

class SignUp extends Component {
  onFormSubmit = formValues => {
    this.props.signup(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign Up!</button>
      </form>
    );
  }
}

export default compose(
  connect(null, { signup }),
  reduxForm({ form: "signup" })
)(SignUp);

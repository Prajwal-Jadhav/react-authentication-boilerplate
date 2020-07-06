import axios from "axios";

export const signup = formValues => dispatch => {
  axios.post("http://localhost:3090/signup", formValues);

  dispatch({ type: "SIGN_UP" });
};

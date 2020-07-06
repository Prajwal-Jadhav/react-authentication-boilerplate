import axios from "axios";

export const signup = formValues => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formValues
    );

    dispatch({ type: "AUTH_USER", payload: response.data.token });
  } catch (e) {
    dispatch({ type: "AUTH_ERROR", payload: "Email Already in use" });
  }
};

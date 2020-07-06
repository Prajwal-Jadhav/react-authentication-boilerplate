import axios from "axios";

export const signup = (formValues, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formValues
    );

    dispatch({ type: "AUTH_USER", payload: response.data.token });

    localStorage.setItem("token", response.data.token);

    callback();
  } catch (e) {
    dispatch({ type: "AUTH_ERROR", payload: "Email Already in use" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return { type: "AUTH_USER", payload: "" };
};

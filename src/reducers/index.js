import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// Initial state for authReducer
const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});

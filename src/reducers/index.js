import { LOGIN, LOGIN_ERROR, ADDPLANETS } from "../actions/type";

const INTIAL_STATE = {isLoggedIn: false, error : ''};

const rootReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGIN_ERROR:
      return {...state, error: "Incorrect Username or password"};
    case ADDPLANETS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default rootReducer;
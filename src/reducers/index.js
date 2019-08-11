import { AppActions } from "../actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case AppActions.POST_LOGIN:
      return { ...state, userData: action.payload, loginSuccess: true, logoutSuccess: false }
    case AppActions.POST_LOGOUT:
      return { ...state, userData: null, loginSuccess: false, logoutSuccess: true }
    case AppActions.SET_PLANETS:
      return { ...state, planetsData: action.payload }
    default:
      return state;
  }
};

export default reducer;
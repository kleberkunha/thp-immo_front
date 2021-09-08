import Cookies from "js-cookie";
import { CREATE_USER, LOGIN_USER, LOGOUT_USER, SET_USER_PROFILE, EDIT_USER_PROFILE } from "store/actions/userActions";


const userInitialState = {
  loading: false,
  error: "",
  user : ""
  };
const emptyState = undefined

export const listingsReducer = (state = initialState, { type, error, listings }) => {
  switch (type) {
    case FETCH_LISTINGS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LISTINGS_SUCCESS:
      return { ...state, loading: false, listings: listings, error:"" };

    case FETCH_LISTINGS_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};



export default function userReducer(state = userInitialState, { action.type, error, listings }) {

  switch (action.type) {
    case CREATE_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
      };
    case LOGOUT_USER:
      return emptyState;
    case SET_USER_PROFILE:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
      }
    default:
      return state;
  }
};
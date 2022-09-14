import {
    GET_USER_LIST_STARTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE,
    GET_MOVIE_DETAILS_STARTED, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_FAILURE
  } from "../actions/actionTypes";
   
  // define initial state of user
  const initialState = {
    user: null,
    movie: null,
    loading: false,
    error: null
  }
   
  // update store based on type and payload and return the state
  export default function common(state = initialState, action) {
    switch (action.type) {
      case GET_USER_LIST_STARTED:
        return {
          ...state,
          loading: true
        }
      case GET_USER_LIST_SUCCESS:
        const { user } = action.payload;
        return {
          ...state,
          user,
          loading: false
        }
      case GET_USER_LIST_FAILURE:
        const { error } = action.payload;
        return {
          ...state,
          error
        }
        case GET_MOVIE_DETAILS_STARTED:
            return {
              ...state,
              loading: true
            }
          case GET_MOVIE_DETAILS_SUCCESS:
            const { movie } = action.payload;
            return {
              ...state,
              movie,
              loading: false
            }
          case GET_MOVIE_DETAILS_FAILURE:
            const { error1 } = action.payload;
            return {
              ...state,
              error: error1
            }
      default:
        return state
    }
  }
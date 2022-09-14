import {
    GET_USER_LIST_STARTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE,
    GET_MOVIE_DETAILS_STARTED, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_FAILURE
} from "./actionTypes";
 
// to get the details  of a user - started
export const getUserListStarted = () => {
  return {
    type: GET_USER_LIST_STARTED
  }
}
 
// to get the details of a user - success
export const getUserListSuccess = user => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: {
      user
    }
  }
}
 
// to get the details of a user - failure
export const getUserListFailure = error => {
  return {
    type: GET_USER_LIST_FAILURE,
    payload: {
      error
    }
  }
}

  // to get the details of a movie  - started
export const getMovieDetailsStarted = () => {
    return {
      type: GET_MOVIE_DETAILS_STARTED
    }
  }
   
  // to get the details of a movie - success
  export const getMovieDetailsSuccess = movie => {
    return {
      type: GET_MOVIE_DETAILS_SUCCESS,
      payload: {
        movie
      }
    }
  }
   
  // to get the details of a movie - failure
  export const getMovieDetailsFailure = error => {
    return {
      type: GET_MOVIE_DETAILS_FAILURE,
      payload: {
        error
      }
    }
}


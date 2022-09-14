import {
    getUserListStarted, getUserListSuccess, getUserListFailure, getMovieDetailsStarted, getMovieDetailsSuccess, getMovieDetailsFailure
  } from "../actions/userActions";
   
  // get user details
  export const getUserDetails = (searchValue) => async dispatch => {
    if(searchValue) {
        dispatch(getUserListStarted());
        try {
          const res = await fetch(`https://swapi.dev/api/people/?search=${searchValue}`);
          const data = await res.json();
          dispatch(getUserListSuccess(data.results[0]));
        } catch (err) {
          dispatch(getUserListFailure(err.message));
        }
    }
  }

  // get movie details
  export const getMovieDetails = (url) => async dispatch => {
        dispatch(getMovieDetailsStarted());
        try {
          const res = await fetch(url);
          const data = await res.json();
          dispatch(getMovieDetailsSuccess(data));
        } catch (err) {
          dispatch(getMovieDetailsFailure(err.message));
        }
  }
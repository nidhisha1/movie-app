import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import common from '../reducers/reducer';
 
export default configureStore({reducer:common}, applyMiddleware(thunk));
import { combineReducers } from 'redux';
import { userRowsReducer } from '/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/userRowsReduser.js';
import { registrationReducer } from './registrationReducer';

export const rootReducers = combineReducers({
  rows: userRowsReducer,
  registration: registrationReducer,

});

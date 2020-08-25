import {combineReducers} from "redux";
import {usersReducer} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/userRowsReduser.js";
import {registrationReducer} from "./registrationReducer";


export const rootReducers = combineReducers({
  users: usersReducer,
  registration: registrationReducer,
});


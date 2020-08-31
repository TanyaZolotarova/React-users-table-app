import {combineReducers} from "redux";
import {usersReducer} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/userRowsReduser";
import {registrationReducer} from "./registrationReducer";


export const rootReducers = combineReducers({
  users: usersReducer,
  registration: registrationReducer,
});

export type RootReducerType = ReturnType<typeof rootReducers>;

import { combineReducers } from 'redux';
import {
  REGISTRATION_SET_ERRORS, REGISTRATION_SET_FIELD, REGISTRATION_SET_LOGGED_IN, REGISTRATION_CLEAR_FORM,
} from '../actions/registration';

const errors = (state = {}, action) => {
  switch (action.type) {
    case REGISTRATION_SET_ERRORS:
      return action.errors;
    case REGISTRATION_SET_LOGGED_IN:
      return {};
    case REGISTRATION_CLEAR_FORM:
      return {};
    default:
      return state;
  }
};

const fields = (state = {}, action) => {
  switch (action.type) {
    case REGISTRATION_SET_FIELD:
      return { ...state, [action.field.name]: action.field.value };
    case REGISTRATION_SET_LOGGED_IN:
      return action.fields;
    case REGISTRATION_CLEAR_FORM:
      return action.fields;
    default:
      return state;
  }
};

const isLogged = (state = false, action) => {
  switch (action.type) {
    case REGISTRATION_SET_LOGGED_IN:
      return true;
    case REGISTRATION_SET_ERRORS:
      return false;
    case REGISTRATION_CLEAR_FORM:
      return false;
    default:
      return state;
  }
};

export const registrationReducer = combineReducers({
  errors,
  fields,
  isLogged,
});

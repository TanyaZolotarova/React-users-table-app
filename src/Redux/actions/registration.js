export const REGISTRATION_SET_ERRORS = '[registration] set errors';
export const REGISTRATION_SET_FIELD = '[registration] set field';
export const REGISTRATION_CLEAR_FORM = '[registration] clear form';
export const REGISTRATION_SET_LOGGED_IN = '[registration] set logged in';

export const setErrors = (errors) => {
  return {
    type: REGISTRATION_SET_ERRORS,
    errors
  }
};

export const setField = (field) => {
  return {
    type: REGISTRATION_SET_FIELD,
    field
  }
};

export const setLoggedIn = (fields) => {
  return {
    type: REGISTRATION_SET_LOGGED_IN,
    // isLogged: true,
    fields
  }
};

export const clearForm = (fields) => {
  return {
    type: REGISTRATION_CLEAR_FORM,
    fields
  }
};
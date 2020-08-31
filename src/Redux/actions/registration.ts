import IInputs from "/home/tanya/PhpstormProjects/untitled8/src/Container/TypeScript/Interfaces/IInputs_interface";

export const REGISTRATION_SET_ERRORS = '[registration] set errors';
export const REGISTRATION_SET_FIELD = '[registration] set field';
export const REGISTRATION_CLEAR_FORM = '[registration] clear form';
export const REGISTRATION_SET_LOGGED_IN = '[registration] set logged in';

export const setErrors = (errors: string) => ({
  type: REGISTRATION_SET_ERRORS,
  errors: errors
} as const);

export const setField = (field: HTMLTextAreaElement) => ({
  type: REGISTRATION_SET_FIELD,
  field: field
} as const);

export const setLoggedIn = (fields:boolean) => ({
  type: REGISTRATION_SET_LOGGED_IN,
  fields: fields
} as const);

export const clearForm = (fields: IInputs) => ({
  type: REGISTRATION_CLEAR_FORM,
  fields: fields
} as const);

export type ActionTypesRegistration = ReturnType<typeof setErrors> |
    ReturnType<typeof setField> |
    ReturnType<typeof setLoggedIn> |
    ReturnType<typeof clearForm>;



// export const REGISTRATION_SET_ERRORS = '[registration] set errors';
// export const REGISTRATION_SET_FIELD = '[registration] set field';
// export const REGISTRATION_CLEAR_FORM = '[registration] clear form';
// export const REGISTRATION_SET_LOGGED_IN = '[registration] set logged in';
//
//
//
// export const setErrors = (errors) => ({
//   type: REGISTRATION_SET_ERRORS,
//   errors,
// });
//
// export const setField = (field) => ({
//   type: REGISTRATION_SET_FIELD,
//   field,
// });
//
// export const setLoggedIn = (fields) => ({
//   type: REGISTRATION_SET_LOGGED_IN,
//   // isLogged: true,
//   fields,
// });
//
// export const clearForm = (fields) => ({
//   type: REGISTRATION_CLEAR_FORM,
//   fields,
// });





import { createAction } from '@reduxjs/toolkit';


export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactsError = createAction('contacts/addContactsError');

export const removeContactsRequest = createAction('contacts/removeContactsRequest');
export const removeContactSuccess = createAction('contacts/removeContactSuccess');
export const removeContactsError = createAction('contacts/removeContactsError');

export const changeFilter = createAction('contacts/changeFilter');
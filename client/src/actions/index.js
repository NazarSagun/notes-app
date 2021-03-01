import {SIGN_IN, SIGN_OUT, CREATE_NOTE, FETCH_NOTE, FETCH_NOTES, EDIT_NOTE, DELETE_NOTE} from './types';
//import axios initialization
import api from '../api';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createNote = formValues => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await api.post('/notes', {...formValues, userId});

  dispatch({ type: CREATE_NOTE, payload: response.data });
  history.push('/');
}

export const fetchNotes = () => async dispatch => {
  const response = await api.get('/notes');

  dispatch({ type: FETCH_NOTES, payload: response.data });
}

export const fetchNote = id => async dispatch => {
  const response = await api.get(`/notes/${id}`);

  dispatch({ type: FETCH_NOTE, payload: response.data });
}

export const editNote = (id, formValues) => async dispatch => {
  //Here we use patch request, becouse we need to change not all
  //properties but only SOME of those, which we need no change.
  //We wouldn't get the userId property with put request and therefor
  //wont see the edit and delete buttons.
  const response = await api.patch(`/notes/${id}`, formValues);

  dispatch({ type: EDIT_NOTE, payload: response.data });
  history.push('/');
}

export const deleteNote = id => async dispatch => {
  await api.delete(`/notes/${id}`);

  dispatch({ type: DELETE_NOTE, payload: id });
  history.push('/');
}
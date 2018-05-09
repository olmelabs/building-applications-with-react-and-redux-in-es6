import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch){
      dispatch(beginAjaxCall());
      return authorApi.getAllAuthors().then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

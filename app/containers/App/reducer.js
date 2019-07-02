/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_SCORE_GAME_NUMBERS,
  LOAD_SCORE_NUMBERS_SUCCESS,
  LOAD_SCORE_NUMBERS_ERROR,
  RESET_SCORE_GAME_NUMBERS,
  RESET_SCORE_GAME_NUMBERS_SUCCESS,
  RESET_SCORE_GAME_NUMBERS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  numbersGameData: {
    score: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_SCORE_GAME_NUMBERS:
        draft.loading = true;
        draft.error = false;
        draft.numbersGameData.score = [];
        break;

      case LOAD_SCORE_NUMBERS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.numbersGameData.score = action.payload.score;
        break;

      case LOAD_SCORE_NUMBERS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;

      case RESET_SCORE_GAME_NUMBERS:
        draft.loading = true;
        draft.error = false;
        break;

      case RESET_SCORE_GAME_NUMBERS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.numbersGameData.score = action.payload.score;
        break;

      case RESET_SCORE_GAME_NUMBERS_ERROR:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export default appReducer;

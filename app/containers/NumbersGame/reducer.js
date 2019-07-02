/*
 * NumbersGameReducer
 *
 */

import produce from 'immer';
import {
  RESET_GAME_NUMBERS,
  START_GAME_NUMBERS,
  START_GAME_NUMBERS_SUCCESS,
  RESET_GAME_NUMBERS_SUCCESS,
  GAME_NUMBERS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  score: 0,
  startAt: null,
  numbers: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const gameNumbersReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log('gameNumbersReducer', action);
    switch (action.type) {
      case START_GAME_NUMBERS:
        draft.numbers = null;
        draft.score = 0;
        draft.startAt = null;
        draft.error = null;
        break;
      case START_GAME_NUMBERS_SUCCESS:
        draft.numbers = action.payload.numbers;
        draft.score = 0;
        draft.startAt = action.payload.startAt;
        draft.error = null;
        break;
      case GAME_NUMBERS_ERROR:
        draft.error = action.payload.error;
        break;
      case RESET_GAME_NUMBERS:
        draft.numbers = null;
        draft.score = 0;
        draft.startAt = null;
        draft.error = null;
        break;
      case RESET_GAME_NUMBERS_SUCCESS:
        draft.numbers = null;
        draft.score = 0;
        draft.startAt = null;
        draft.error = null;
        break;
    }
  });

export default gameNumbersReducer;

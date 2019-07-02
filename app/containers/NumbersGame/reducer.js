/*
 * NumbersGameReducer
 *
 */

import produce from 'immer';
import { RESTART_GAME_NUMBERS } from './constants';

// The initial state of the App
export const initialState = {
  score: 0,
  numbers: null,
};

/* eslint-disable default-case, no-param-reassign */
const gameNumbersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESTART_GAME_NUMBERS:
        draft.numbers = null;
        draft.score = 0;
        break;
    }
  });

export default gameNumbersReducer;

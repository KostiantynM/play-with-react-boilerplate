/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGameNumbers = state => state.gameNumbers || initialState;

const makeSelectGameNumbers = () =>
  createSelector(
    selectGameNumbers,
    gameNumbersState => ({
      numbers: gameNumbersState.numbers,
      score: gameNumbersState.score,
      startAt: gameNumbersState.startAt,
      error: gameNumbersState.error,
    }),
  );

export { makeSelectGameNumbers };

/*
 * PlayWithCode Actions
 *
 */

import {
  RESET_GAME_NUMBERS,
  RESET_GAME_NUMBERS_SUCCESS,
  START_GAME_NUMBERS,
  START_GAME_NUMBERS_SUCCESS,
  GAME_NUMBERS_ERROR,
} from './constants';

export function resetGameNumbers() {
  return {
    type: RESET_GAME_NUMBERS,
  };
}

export function resetedGameNumbers(data) {
  return {
    type: RESET_GAME_NUMBERS_SUCCESS,
    payload: {
      startAt: data.startAt,
      numbers: data.numbers,
    },
  };
}

export function startGameNumbers() {
  return {
    type: START_GAME_NUMBERS,
  };
}

export function startedGameNumbers(data) {
  console.log('startedGameNumbers(data)', data);
  return {
    type: START_GAME_NUMBERS_SUCCESS,
    payload: {
      startAt: data.startAt,
      numbers: data.numbers,
    },
  };
}

export function gameNumbersError(error) {
  return {
    type: GAME_NUMBERS_ERROR,
    payload: {
      error,
    },
  };
}

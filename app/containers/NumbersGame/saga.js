/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest } from 'redux-saga/effects';
import { RESTART_GAME_NUMBERS } from 'containers/App/constants';
import { resetGame, gameNumbersError } from 'containers/App/actions';

/**
 * Github repos request/response handler
 */
export function* resetGameNumbers() {
  try {
    yield put(resetGame());
  } catch (err) {
    yield put(gameNumbersError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(RESTART_GAME_NUMBERS, resetGameNumbers);
}

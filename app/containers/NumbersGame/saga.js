/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest, all, call, fork } from 'redux-saga/effects';
import {
  LOAD_SCORE_GAME_NUMBERS,
  // LOAD_SCORE_NUMBERS_SUCCESS,
  // LOAD_SCORE_NUMBERS_ERROR,
  RESET_SCORE_GAME_NUMBERS,
  // RESET_SCORE_GAME_NUMBERS_SUCCESS,
  // RESET_SCORE_GAME_NUMBERS_ERROR,
} from 'containers/App/constants';
import {
  // loadScoreGameNumbers,
  loadedScoreGameNumbers,
  loadingScoreGameNumbersError,
  // resetScoreGameNumbers,
  resetedScoreGameNumbers,
  resetingScoreGameNumbersError,
} from 'containers/App/actions';
import { START_GAME_NUMBERS, RESET_GAME_NUMBERS } from './constants';

import {
  // startGameNumbers,
  startedGameNumbers,
  resetGameNumbers,
  gameNumbersError,
} from './actions';
/**
 * Github repos request/response handler
 */
const generateNumbers = function(size) {
  const generateCoord = function(fieldLength) {
    let x = 0;
    let y = 0;
    // eslint-disable-next-line func-names
    return function() {
      // eslint-disable-next-line no-plusplus
      const coords = { x, y };
      x++;
      if (x === fieldLength) {
        x = 0;
        y++;
      }

      if (y === fieldLength) {
        x = 0;
        y = 0;
      }

      return coords;
    };
  };

  const getRandom = function(max) {
    return parseInt(Math.random() * max, 10);
  };

  const shuffle = function(arr) {
    const shuffledArray = [];
    let tmpArr = arr;

    while (tmpArr.length > 0) {
      const i = getRandom(tmpArr.length);
      shuffledArray.push(tmpArr[i]);
      tmpArr = [...tmpArr.slice(0, i), ...tmpArr.slice(i + 1)];
    }

    return shuffledArray;
  };

  const getCoord = generateCoord(Math.sqrt(size));
  const valuesArr = shuffle([...Array(size - 1)].map(Number.call, Number));
  valuesArr.push(null);
  console.log(valuesArr);
  return valuesArr.map((value, i) => {
    const { x, y } = getCoord();
    return {
      id: i + 1,
      x,
      y,
      v: value,
    };
  });
};

export function* startGameNumbersGen() {
  try {
    console.log('startGameNumbersGen');
    const numbers = generateNumbers(16);
    const payload = {
      numbers,
      startAt: Date.now(),
      score: 0,
      error: null,
    };
    yield put(startedGameNumbers(payload));
  } catch (err) {
    yield put(gameNumbersError(err));
  }
}

export function* resetGameNumbersGen() {
  try {
    console.log('resetGameNumbersGen');
    const payload = {
      numbers: null,
      startAt: null,
      score: 0,
      error: null,
    };
    yield put(resetGameNumbers(payload));
  } catch (err) {
    yield put(loadingScoreGameNumbersError(err)); // TODO: refactor to set global error handel actions
  }
}

export function* loadScoreGameNumbersGen() {
  try {
    console.log('loadScoreGameNumbers');
    const score = [
      {
        user: 'kostiantynM',
        score: 100,
      },
      {
        user: 'test',
        score: 50,
      },
    ];
    const payload = {
      score,
    };
    yield put(loadedScoreGameNumbers(payload));
  } catch (err) {
    yield put(loadingScoreGameNumbersError(err));
  }
}

export function* resetScoreGameNumbersGen() {
  try {
    console.log('resetScoreGameNumbers');
    const payload = {
      score: [],
    };
    yield put(resetedScoreGameNumbers(payload));
  } catch (err) {
    yield put(resetingScoreGameNumbersError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
// export function* gameNumbersDataLoad() {
//   yield takeLatest(LOAD_SCORE_GAME_NUMBERS, loadScoreGameNumbersGen);
// }

// export function* gameNumbersDataReset() {
//   yield call(RESET_SCORE_GAME_NUMBERS, resetScoreGameNumbersGen);
// }

// export function* gameNumbersStart() {
//   yield call(START_GAME_NUMBERS, startGameNumbersGen);
// }

// export function* gameNumbersReset() {
//   yield call(RESET_GAME_NUMBERS, resetGameNumbersGen);
// }

export default function* rootSaga() {
  yield takeLatest(LOAD_SCORE_GAME_NUMBERS, loadScoreGameNumbersGen);
  yield takeLatest(RESET_SCORE_GAME_NUMBERS, resetScoreGameNumbersGen);
  yield takeLatest(START_GAME_NUMBERS, startGameNumbersGen);
  yield takeLatest(RESET_GAME_NUMBERS, resetGameNumbersGen);
}

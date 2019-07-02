/*
 * PlayWithCode Actions
 *
 */

import { RESTART_GAME_NUMBERS } from './constants';

export function restart() {
  return {
    type: RESTART_GAME_NUMBERS,
  };
}

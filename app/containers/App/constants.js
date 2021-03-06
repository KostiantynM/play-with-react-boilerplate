/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

export const LOAD_SCORE_GAME_NUMBERS = 'boilerplate/App/LOAD_SCORE_GAME_NUMBERS';
export const LOAD_SCORE_NUMBERS_SUCCESS = 'boilerplate/App/LOAD_SCORE_NUMBERS_SUCCESS';
export const LOAD_SCORE_NUMBERS_ERROR = 'boilerplate/App/LOAD_SCORE_NUMBERS_ERROR';
export const RESET_SCORE_GAME_NUMBERS = 'boilerplate/App/RESET_SCORE_GAME_NUMBERS';
export const RESET_SCORE_GAME_NUMBERS_SUCCESS = '/RESET_SCORE_GAME_NUMBERS_SUCCESS';
export const RESET_SCORE_GAME_NUMBERS_ERROR = '/RESET_SCORE_GAME_NUMBERS_ERROR';
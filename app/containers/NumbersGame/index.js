/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/*
 * NumbersGame
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Button from 'components/Button';
import GameDashboard from 'components/GameDashboard';
import {
  makeSelectGameNumbersScore,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import { makeSelectGameNumbers } from './selectors';

import { resetGameNumbers, startGameNumbers } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'gameNumbers';

export function NumbersGame({
  loading,
  error,
  score,
  gameNumbers,
  onResetClick,
  onStartClick,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const gameListProps = {
    loading,
    error,
    score,
    numbers: gameNumbers.numbers,
    startAt: gameNumbers.startAt,
  };

  console.log('gameListProps', gameListProps);

  return (
    <article>
      <Helmet>
        <title>Numbers game</title>
        <meta
          name="description"
          content="Play with numbers to test play with code"
        />
      </Helmet>
      {/* game board start */}
      <GameDashboard {...gameListProps} />
      {/* game board end */}

      {/* game controls start */}
      <div>
        <Button onClick={onStartClick}>
          <span>start</span>
        </Button>
      </div>
      <div>
        <Button onClick={onResetClick}>
          <span>reset</span>
        </Button>
      </div>
      {/* game controls end */}
    </article>
  );
}

NumbersGame.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  score: PropTypes.any,
  onResetClick: PropTypes.func,
  onStartClick: PropTypes.func,
  gameNumbers: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  score: makeSelectGameNumbersScore(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  gameNumbers: makeSelectGameNumbers(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onResetClick: () => dispatch(resetGameNumbers()),
    onStartClick: () => dispatch(startGameNumbers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NumbersGame);

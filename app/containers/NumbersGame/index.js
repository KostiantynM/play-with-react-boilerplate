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
  makeSelectNumbers,
  makeSelectScore,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import { restart } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'gameNumbers';

export function NumbersGame({ loading, error, onResetClick, onStartClick }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const generateCoord = function(size) {
    let x = 0;
    let y = 0;
    // eslint-disable-next-line func-names
    return function() {
      // eslint-disable-next-line no-plusplus
      const coords = { x, y };
      x++;
      if (x === size) {
        x = 0;
        y++;
      }

      if (y === size) {
        x = 0;
        y = 0;
      }

      return coords;
    };
  };

  const size = 16;

  const getCoord = generateCoord(Math.sqrt(size));
  const gameListProps = {
    loading,
    error,
    numbers: [...Array(size)].map((j, i) => {
      const { x, y } = getCoord();
      const v = i + 1 === size ? null : i + 1;
      return {
        id: i + 1,
        x,
        y,
        v,
      };
    }),
  };

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
  onResetClick: PropTypes.func,
  onStartClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  numbers: makeSelectNumbers(),
  score: makeSelectScore(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onResetClick: () => dispatch(restart()),
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

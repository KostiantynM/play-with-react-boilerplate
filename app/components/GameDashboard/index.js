import React from 'react';
import PropTypes from 'prop-types';

import FieldGrid from 'components/FieldGrid';
import FieldItem from 'components/FieldItem';
import LoadingIndicator from 'components/LoadingIndicator';

function ScoreComponent(score) {
  return (
    <div>
      {score.map(i => (
        <div key={`item-${i.id}`}>{`${i.user} - ${i.score}`}</div>
      ))}
    </div>
  );
}

function GameField({ loading, error, numbers, score }) {
  if (loading) {
    return <FieldGrid component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <FieldItem item="Something went wrong, please try again!" />
    );
    return <FieldGrid component={ErrorComponent} />;
  }

  if (numbers != null) {
    return <FieldGrid items={numbers} component={FieldItem} />;
  }

  return score.length > 0 ? (
    <FieldGrid score={score} component={ScoreComponent} />
  ) : null;
}

GameField.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  numbers: PropTypes.any,
  score: PropTypes.any,
};

export default GameField;

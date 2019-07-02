import React from 'react';
import PropTypes from 'prop-types';

import FieldGrid from 'components/FieldGrid';
import FieldItem from 'components/FieldItem';
import LoadingIndicator from 'components/LoadingIndicator';

function GameField({ loading, error, numbers }) {
  if (loading) {
    return <FieldGrid component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <FieldItem item="Something went wrong, please try again!" />
    );
    return <FieldGrid component={ErrorComponent} />;
  }

  if (numbers !== null) {
    return <FieldGrid items={numbers} component={FieldItem} />;
  }

  return null;
}

GameField.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  numbers: PropTypes.any,
};

export default GameField;

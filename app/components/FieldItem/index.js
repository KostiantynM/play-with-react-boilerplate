import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Wrapper from './Wrapper';

function FieldItem(props) {
  const { v } = props.item;
  return (
    <Wrapper prsVal={props.prsVal}>
      <Field>{v}</Field>
    </Wrapper>
  );
}

FieldItem.propTypes = {
  item: PropTypes.any,
  prsVal: PropTypes.number,
};

export default FieldItem;

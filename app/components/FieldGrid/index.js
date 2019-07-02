import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';
import Wrapper from './Wrapper';

function FieldList(props) {
  const ComponentToRender = props.component; // FieldItem
  let content = <div />;
  console.log(props);
  const size = props.items ? Math.sqrt(props.items.length) : 1;
  const prsVal = 100 / (size + 1);
  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} prsVal={prsVal} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Grid size={size}>{content}</Grid>
    </Wrapper>
  );
}

FieldList.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default FieldList;

import React from 'react';

const Counter = ({ number }) => (
  <span>{ number }</span>
);

Counter.propTypes = {
  number: React.PropTypes.number.isRequired
};

export default Counter;
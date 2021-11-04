import React from 'react';
import PropTypes from 'prop-types';

const decrementButton = ({ currentValue, startingValue, clickHandler }) => {
  return (
    <button
      type="button"
      disabled={currentValue === startingValue}
      onClick={clickHandler}
    >-</button>
  );
};

decrementButton.propTypes = {
  currentValue: PropTypes.number.isRequired,
  startingValue: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default decrementButton;

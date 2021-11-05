import React from 'react';
import PropTypes from 'prop-types';

const DecrementButton = ({ currentValue, startingValue, clickHandler }) => {
  return (
    <button
      type="button"
      disabled={currentValue === startingValue}
      onClick={clickHandler}
    >-</button>
  );
};

DecrementButton.propTypes = {
  currentValue: PropTypes.number.isRequired,
  startingValue: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default DecrementButton;

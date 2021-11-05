import React from 'react';
import PropTypes from 'prop-types';

const Increment = ({ notDisabled, clickHandler }) => {
  return (
    <button
      type="button"
      disabled={!notDisabled}
      onClick={clickHandler}
    >+</button>
  );
};

Increment.propTypes = {
  notDisabled: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Increment;

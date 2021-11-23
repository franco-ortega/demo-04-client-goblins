import React from 'react';
import PropTypes from 'prop-types';

const GoblinSelect = ({
  goblins,
  onGoblinSubmit,
  onGoblinToUpdateSelect
}) => {
  const goblinOptions = goblins.map(goblin => (
    <option
      key={goblin.id}
      value={goblin.id}>{goblin.goblinName}</option>
  ));

  goblinOptions.unshift(<option
    key="0"
    value="none">Pick a goblin</option>);

  return (
    <form onSubmit={onGoblinSubmit}><h3>Update a Goblin</h3>
      <select name="" id="" onChange={onGoblinToUpdateSelect}>
        {goblinOptions}
      </select>
      <button>Update</button>
    </form>
  );
};

GoblinSelect.propTypes = {
  goblins: PropTypes.array.isRequired,
  onGoblinSubmit: PropTypes.func.isRequired,
  onGoblinToUpdateSelect: PropTypes.func.isRequired
};

export default GoblinSelect;

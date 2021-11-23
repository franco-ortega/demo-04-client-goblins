import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GoblinSelect = ({
  goblins,
  setGoblinToUpdate
}) => {
  const [selectedGoblin, setSelectedGoblin] = useState(null);

  const onGoblinSubmit = (e) => {
    e.preventDefault();

    setGoblinToUpdate(goblins.find(goblin => {
      return goblin.id === selectedGoblin;
    }));
  };

  const goblinOptions = goblins.map(goblin => (
    <option
      key={goblin.id}
      value={goblin.id}
    >{goblin.goblinName}</option>
  ));

  goblinOptions.unshift(<option
    key="0"
    value="">Pick a goblin</option>);

  return (
    <form htmlFor="update"
      onSubmit={onGoblinSubmit}><h3>Update a Goblin</h3>
      <select name="update" id="update"
        onChange={({ target }) => setSelectedGoblin(target.value)}>
        {goblinOptions}
      </select>
      <button>Update</button>
    </form>
  );
};

GoblinSelect.propTypes = {
  goblins: PropTypes.array.isRequired,
  setGoblinToUpdate: PropTypes.func.isRequired
};

export default GoblinSelect;

import React from 'react';
import PropTypes from 'prop-types';

const Goblin = ({ goblin }) => {
  const items = goblin.items.map((item, index) => (
    index + 1 < goblin.items.length
      ?
      <span key={index}>{item}, </span>
      :
      <span key={index}>{item}.</span>
  ));

  return (
    <section>
      <h2>{goblin.goblinName}</h2>
      <p><span>Hit Points:</span> {goblin.hitPoints}</p>
      <p><span>Armor Class:</span> {goblin.armorClass}</p>
      <p><span>Items:</span> {items.length ? items : 'none'}</p>
    </section>
  );
};

Goblin.propTypes = {
  goblin: PropTypes.object.isRequired
};

export default Goblin;

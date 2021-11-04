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
      <br />
      <h2>{goblin.goblinName}</h2>
      <p>Hit Points: {goblin.hitPoints}</p>
      <p>Armor Class: {goblin.armorClass}</p>
      <p>Items: {items}</p>
      <br />
    </section>
  );
};

Goblin.propTypes = {
  goblin: PropTypes.object.isRequired
};

export default Goblin;

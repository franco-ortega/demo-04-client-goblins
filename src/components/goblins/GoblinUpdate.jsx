import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

const GoblinUpdate = ({ goblinName, hitPoints, armorClass, items }) => {
  const [name, setName] = useState(goblinName);
  const [hp, setHP] = useState(hitPoints);
  const [ac, setAC] = useState(armorClass);
  const [itemList, setItemList] = useState(items);

  console.log(setName);
  console.log(setHP);
  console.log(setAC);
  console.log(setItemList);

  return (
    <div>
      <h3>Update Your Goblin</h3>
      <form>
        <label htmlFor="name">Name
          <input
            id="name"
            placeholder="name"
            type="text"
            value={name}
          />
        </label>
        <label htmlFor="hit points">Hit Points
          <input
            id="hit points"
            placeholder="Hit Points"
            type="number"
            value={hp}
          />
        </label>
        <label htmlFor="armor class"> Armor Class
          <input
            id="armor class"
            placeholder="armor class"
            type="number"
            value={ac}
          />
        </label>
        <label htmlFor="items">Items
          <input
            id="items"
            placeholder="Items"
            type="text"
            value={itemList.reduce((acc, cur) => acc + cur)}
          />
        </label>
      </form>
      
    </div>
  );
};

GoblinUpdate.propTypes = {
  goblinName: PropTypes.string.isRequired,
  hitPoints: PropTypes.number.isRequired,
  armorClass: PropTypes.number.isRequired,
  items: PropTypes.shape([]).isRequired
};

export default GoblinUpdate;

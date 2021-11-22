import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateGoblin } from '../../services/updateGoblin';

const GoblinUpdate = ({ id, goblinName, hitPoints, armorClass, items,
  setGoblinUpdate }) => {
  const [name, setName] = useState(goblinName);
  const [hp, setHP] = useState(hitPoints);
  const [ac, setAC] = useState(armorClass);
  const [itemList, setItemList] = useState(items);

  const onItemsChange = ({ target }) => {
    const splitItems = target.value.split(',');
    setItemList(splitItems);
  };

  const itemsToDisplay = itemList.reduce((acc, cur) => {
    if(itemList.length === items.length) return acc + ', ' + cur;
    return acc + ',' + cur;
  });

  const onUpdateClick = (e) => {
    e.preventDefault();

    updateGoblin(id, {
      goblinName: name,
      hitPoints: hp,
      armorClass: ac,
      items: itemList
    });

    setGoblinUpdate(prevState => !prevState);
  };

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
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="hit points">Hit Points
          <input
            id="hit points"
            placeholder="Hit Points"
            type="number"
            value={hp}
            onChange={(e) => setHP(e.target.value)}
          />
        </label>
        <label htmlFor="armor class"> Armor Class
          <input
            id="armor class"
            placeholder="armor class"
            type="number"
            value={ac}
            onChange={(e) => setAC(e.target.value)}
          />
        </label>
        <label htmlFor="items">Items
          <input
            id="items"
            placeholder="Items"
            type="text"
            value={itemsToDisplay}
            onChange={onItemsChange}
          />
        </label>

        <button onClick={onUpdateClick}>Update</button>
      </form>
      
    </div>
  );
};

GoblinUpdate.propTypes = {
  id: PropTypes.string.isRequired,
  goblinName: PropTypes.string.isRequired,
  hitPoints: PropTypes.number.isRequired,
  armorClass: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  setGoblinUpdate: PropTypes.func.isRequired
};

export default GoblinUpdate;

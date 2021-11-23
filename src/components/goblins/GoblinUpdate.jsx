import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateGoblin } from '../../services/updateGoblin';
import { findGoblins } from '../../services/findGoblins';

const GoblinUpdate = ({ id, goblinName, hitPoints, armorClass, items,
  setGoblins, setGoblinToUpdate }) => {
  const [name, setName] = useState(goblinName);
  const [hp, setHP] = useState(hitPoints);
  const [ac, setAC] = useState(armorClass);
  const [itemList, setItemList] = useState('');

  useEffect(() => {
    if(items.length) setItemList(items.reduce((acc, cur) => acc + ', ' + cur));
  }, []);
  
  const onItemsChange = ({ target }) => {
    setItemList(target.value);
  };

  const onUpdateSubmit = async(e) => {
    e.preventDefault();

    await updateGoblin(id, {
      goblinName: name,
      hitPoints: hp,
      armorClass: ac,
      items: itemList.split(', ')
    });
    
    findGoblins()
      .then(res => setGoblins(res));

    setGoblinToUpdate(null);
  };

  return (
    <div>
      <h3>Update Your Goblin</h3>
      <form onSubmit={onUpdateSubmit}>
        <label htmlFor="name">Name
          <input
            required
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
            value={itemList}
            onChange={onItemsChange}
          />
        </label>
        <button>Update</button>
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
  setGoblins: PropTypes.func.isRequired,
  setGoblinToUpdate: PropTypes.func.isRequired
};

export default GoblinUpdate;

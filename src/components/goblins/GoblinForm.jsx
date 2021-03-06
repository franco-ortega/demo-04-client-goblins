import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { insertGoblin } from '../../services/insertGoblin';
import { useValue } from '../../hooks/useValue';
import DecrementButton from '../buttons/DecrementButton';
import IncrementButton from '../buttons/IncrementButton';

const GoblinForm = ({ setGoblins }) => {
  const startingHitPoints  = 5;
  const startingArmorClass  = 10;
  const startingPointsToSpend = 5;
  const [name, setName] = useState('');
  const [pointsToSpend, setPointsToSpend] = useState(startingPointsToSpend);
  const [items, setItems] = useState([]);

  const {
    currentValue: hitPoints,
    setCurrentValue: setHitpoints,
    increaseValue: onAddHitPoints,
    decreaseValue: onMinusHitPoints
  } = useValue(startingHitPoints, setPointsToSpend);
  
  const {
    currentValue: armorClass,
    setCurrentValue: setArmorClass,
    increaseValue: onIncreaseArmorClass,
    decreaseValue: onDecreaseArmorClass
  } = useValue(startingArmorClass, setPointsToSpend);

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onItemsChange = ({ target }) => {
    setItems(target.value.split(','));
  };

  const onFormSubmit = async(e) => {
    e.preventDefault();

    await insertGoblin({
      goblinName: name,
      hitPoints,
      armorClass,
      items
    })
      .then(res => {
        setGoblins(prevState => [...prevState, res]);
      });

    setName('');
    setItems([]);
    setHitpoints(startingHitPoints);
    setArmorClass(startingArmorClass);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h3>Create a goblin</h3>
      <label htmlFor="name">Name:
        <input id="name" type="text" placeholder="Name"
          required
          value={name}
          onChange={onNameChange} />
        <div>
          Points to spend: {pointsToSpend}
          <br />
          (use for HP and/or AC)
        </div>
      </label>

      <label htmlFor="hit points">Hit Points:
        <p id="hit points" type="text" value={hitPoints}>{hitPoints}</p>
        <DecrementButton
          currentValue={hitPoints}
          startingValue={startingHitPoints}
          clickHandler={onMinusHitPoints}
        />
        <IncrementButton
          notDisabled={pointsToSpend}
          clickHandler={onAddHitPoints}
        />
      </label>

      <label htmlFor="armor class">Armor Class:
        <p id="armor class" type="text" value={armorClass}>{armorClass}</p>
        <DecrementButton
          currentValue={armorClass}
          startingValue={startingArmorClass}
          clickHandler={onDecreaseArmorClass}
        />
        <IncrementButton
          notDisabled={pointsToSpend}
          clickHandler={onIncreaseArmorClass}
        />
      </label>

      <label htmlFor="goblin">Items: <br /> (separate items by comma) <br />
        <input id="goblin" type="text" placeholder="Items"
          value={items}
          onChange={onItemsChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

GoblinForm.propTypes = {
  setGoblins: PropTypes.func.isRequired
};

export default GoblinForm;


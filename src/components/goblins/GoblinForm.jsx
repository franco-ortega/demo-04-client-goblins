import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { insertGoblin } from '../../services/insertGoblin';
import { useValue } from '../../hooks/useValue';

const GoblinForm = ({ setGoblins }) => {
  const startingHitPoints  = 5;
  const startingArmorClass  = 10;
  const startingPointsToSpend = 5;
  const [name, setName] = useState('');
  const [pointsToSpend, setPointsToSpend] = useState(startingPointsToSpend);

  const {
    value: hitPoints,
    increaseValue: onAddHitPoints,
    decreaseValue: onMinusHitPoints
  } = useValue(startingHitPoints, setPointsToSpend);
  
  const {
    value: armorClass,
    increaseValue: onIncreaseArmorClass,
    decreaseValue: onDecreaseArmorClass
  } = useValue(startingArmorClass, setPointsToSpend);

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onFormSubmit = async(e) => {
    e.preventDefault();

    await insertGoblin({
      goblinName: name,
      hitPoints,
      armorClass,
      items: ['sample']
    })
      .then(res => {
        setGoblins(prevState => [...prevState, res]);
      });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>

        <label htmlFor="name">Name:
          <input id="name" type="text" placeholder="Name"
            onChange={onNameChange} />
          <div>
          Points to spend: {pointsToSpend}
            <br />
          (use for HP and/or AC)
          </div>
        </label>

        <label htmlFor="hit points">Hit Points:
          <p id="hit points" type="text" value={hitPoints}>{hitPoints}</p>
          
          <button
            type="button"
            disabled={hitPoints === startingHitPoints}
            onClick={onMinusHitPoints}
          >-</button>

          <button
            type="button"
            disabled={!pointsToSpend}
            onClick={onAddHitPoints}
          >+</button>
        </label>

        <label htmlFor="armor class">Armor Class:
          <p id="armor class" type="text" value={armorClass}>{armorClass}</p>

          <button
            type="button"
            disabled={armorClass === startingArmorClass}
            onClick={onDecreaseArmorClass}
          >-</button>

          <button
            type="button"
            disabled={!pointsToSpend}
            onClick={onIncreaseArmorClass}
          >+</button>
        </label>

        {/* <label htmlFor="goblin">Items:
          <input id="goblin" type="text" />
        </label> */}
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

GoblinForm.propTypes = {
  setGoblins: PropTypes.func.isRequired
};

export default GoblinForm;


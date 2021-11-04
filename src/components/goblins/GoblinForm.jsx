import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { insertGoblin } from '../../services/insertGoblin';

const GoblinForm = ({ setGoblins }) => {
  const startingHitPoints  = 7;
  const startingArmorClass  = 10;
  const startingPointsToSpend = 5;

  const [name, setName] = useState('');
  const [hitPoints, setHitPoints] = useState(startingHitPoints);
  const [armorClass, setArmorClass] = useState(startingArmorClass);
  const [pointsToSpend, setPointsToSpend] = useState(startingPointsToSpend);

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

  const onAddHitPoints = () => {
    setHitPoints(prevState => prevState + 1);
    setPointsToSpend(prevState => prevState - 1);
  };

  const onMinusHitPoints = () => {
    setHitPoints(prevState => prevState - 1);
    setPointsToSpend(prevState => prevState + 1);
  };

  const onIncreaseArmorClass = () => {
    setArmorClass(prevState => prevState + 1);
    setPointsToSpend(prevState => prevState - 1);
  };

  const onDecreaseArmorClass = () => {
    setArmorClass(prevState => prevState - 1);
    setPointsToSpend(prevState => prevState + 1);
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

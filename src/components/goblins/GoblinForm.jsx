import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { insertGoblin } from '../../services/insertGoblin';

const GoblinForm = ({ setGoblins }) => {
  const [name, setName] = useState('');
  const [hitPoints, setHitPoints] = useState(5);
  const [armorClass, setArmorClass] = useState(10);

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onFormSubmit = async(e) => {
    e.preventDefault();
    console.log('form clicked');

    await insertGoblin({
      goblinName: name,
      hitPoints: 10,
      armorClass: 15,
      items: ['sample']
    })
      .then(res => {
        setGoblins(prevState => [...prevState, res]);
      });
  };

  const onAddHitPoints = () => {
    console.log('plus clicked');
    setHitPoints(prevState => prevState + 1);
  };

  const onMinusHitPoints = () => {
    console.log('minus clicked');
    setHitPoints(prevState => prevState - 1);
  };

  const onIncreaseArmorClass = () => {
    console.log('increase clicked');
    setArmorClass(prevState => prevState + 1);
  };

  const onDecreaseArmorClass = () => {
    console.log('decrease clicked');
    setArmorClass(prevState => prevState - 1);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Name:
          <input id="name" type="text" onChange={onNameChange} />
        </label>
        <label htmlFor="hit points">Hit Points:
          <p
            id="hit points"
            type="text"
            value={hitPoints}
          >{hitPoints} </p>
          <button type="button" onClick={onAddHitPoints}>+</button>
          <button type="button" onClick={onMinusHitPoints}>-</button>
        </label>
        <label htmlFor="armor class">Armor Class:
          <p
            id="armor class"
            type="text"
            value={armorClass}
          >{armorClass} </p>
          <button type="button" onClick={onIncreaseArmorClass}>+</button>
          <button type="button" onClick={onDecreaseArmorClass}>-</button>
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

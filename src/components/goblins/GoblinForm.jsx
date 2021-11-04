import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { insertGoblin } from '../../services/insertGoblin';

const GoblinForm = ({ setGoblins }) => {
  const [name, setName] = useState('');

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

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="goblin">Name:
          <input id="goblin" type="text" onChange={onNameChange} />
        </label>
        <label htmlFor="goblin">HP:
          <input id="goblin" type="text" />
        </label>
        <label htmlFor="goblin">AC:
          <input id="goblin" type="text" />
        </label>
        {/* <label htmlFor="goblin">Items:
          <input id="goblin" type="text" />
        </label> */}
        <button>Submit</button>
      </form>
      
    </div>
  );
};

GoblinForm.propTypes = {
  setGoblins: PropTypes.func.isRequired
};

export default GoblinForm;

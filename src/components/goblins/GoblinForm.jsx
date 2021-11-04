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
        console.log(res);
        // setGoblins(prevState => prevState);
        setGoblins(prevState => [...prevState, res]);
      });

  };

  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <label htmlFor="">Name:
          <input type="text" onChange={onNameChange} />
        </label>
        {/* <label htmlFor="">HP:
          <input type="text" />
        </label>
        <label htmlFor="">AC:
          <input type="text" />
        </label>
        <label htmlFor="">Items:
          <input type="text" />
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

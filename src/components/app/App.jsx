import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
import Goblin from '../goblins/Goblin';
import GoblinForm from '../goblins/GoblinForm';
import GoblinUpdate from '../goblins/GoblinUpdate';
import './App.css';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const [selectedGoblin, setSelectedGoblin] = useState(null);
  const [goblinToUpdate, setGoblinToUpdate] = useState(null);

  useEffect(() => {
    findGoblins()
      .then(res => setGoblins(res));
  }, []);

  const onGoblinToUpdateSelect = ({ target }) => {
    setSelectedGoblin(target.value);
    
  };

  const onGoblinSubmit = (e) => {
    e.preventDefault();
    console.log('goblin submit clicked');
    console.log(selectedGoblin);

    setGoblinToUpdate(goblins.find(goblin => {
      return goblin.id === selectedGoblin;
    }));
  };

  const goblinsToDisplay = goblins.map(goblin => (
    <Goblin key={goblin.id} goblin={goblin} />
  ));

  const goblinOptions = goblins.map(goblin => (
    <option
      key={goblin.id}
      value={goblin.id}>{goblin.goblinName}</option>
  ));

  goblinOptions.unshift(<option
    key="0"
    value="none">Pick a goblin</option>);

  return (
    <>
      <h1>Goblins are coming...</h1>
      <GoblinForm setGoblins={setGoblins} />
      <main>
        {goblinsToDisplay}
      </main>
      {goblins.length && !goblinToUpdate &&
        <form onSubmit={onGoblinSubmit}>Update a Goblin
          <select name="" id="" onChange={onGoblinToUpdateSelect}>
            {goblinOptions}
          </select>
          <button>Update</button>
        </form>
      }
      {goblinToUpdate &&
        <GoblinUpdate
          {...goblinToUpdate}
          setGoblins={setGoblins}
          setGoblinToUpdate={setGoblinToUpdate}
        />
      }
    </>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
// import { updateGoblin } from '../../services/updateGoblin';
import Goblin from '../goblins/Goblin';
import GoblinForm from '../goblins/GoblinForm';
import GoblinUpdate from '../goblins/GoblinUpdate';
import './App.css';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const [goblinUpdate, setGoblinUpdate] = useState(false);

  useEffect(() => {
    findGoblins()
      .then(res => setGoblins(res));
  }, [goblinUpdate]);

  console.log(goblins);

  const goblinsToDisplay = goblins.map(goblin => (
    <Goblin key={goblin.id} goblin={goblin} />
  ));

  return (
    <>
      <h1>Goblins are coming...</h1>
      <GoblinForm setGoblins={setGoblins} />
      <main>
        {goblinsToDisplay}
      </main>
      {goblins.length &&
        <GoblinUpdate {...goblins[0]} setGoblinUpdate={setGoblinUpdate} />
      }
    </>
  );
};

export default App;

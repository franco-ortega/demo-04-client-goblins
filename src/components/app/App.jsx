import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
// import { updateGoblin } from '../../services/updateGoblin';
import Goblin from '../goblins/Goblin';
import GoblinForm from '../goblins/GoblinForm';
import './App.css';

const App = () => {
  const [goblins, setGoblins] = useState([]);

  useEffect(() => {
    findGoblins()
      .then(res => setGoblins(res));

    // updateGoblin(1, {
    //   goblinName: 'Taru',
    //   hitPoints: 22,
    //   armorClass: 8,
    //   items: [
    //     'apple pie',
    //     'big watch on chain'
    //   ]
    // }).then(goblin => console.log(goblin));
  }, []);

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
    </>
  );
};

export default App;

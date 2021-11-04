import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
import Goblin from '../goblins/Goblin';
import GoblinForm from '../goblins/GoblinForm';
import './App.css';

const App = () => {
  const [goblins, setGoblins] = useState([]);

  useEffect(() => {
    findGoblins()
      .then(res => setGoblins(res));
  }, []);

  console.log(goblins);

  const goblinsToDisplay = goblins.map(goblin => (
    <Goblin key={goblin.id} goblin={goblin} />
  ));

  return (
    <>
      <h1>Hello...goblins are coming...</h1>
      <GoblinForm setGoblins={setGoblins} />
      <main>
        {goblinsToDisplay}
      </main>
    </>
  );
};

export default App;

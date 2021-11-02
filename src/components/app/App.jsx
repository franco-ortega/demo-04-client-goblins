import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
import Goblin from '../goblins/Goblin';
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
      <p>
        {goblinsToDisplay}
      </p>
    </>
  );
};

export default App;

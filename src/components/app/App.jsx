import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
import Goblin from '../goblins/Goblin';
import GoblinForm from '../goblins/GoblinForm';
import GoblinSelect from '../goblins/GoblinSelect';
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

    setGoblinToUpdate(goblins.find(goblin => {
      return goblin.id === selectedGoblin;
    }));
  };

  const goblinsToDisplay = goblins.map(goblin => (
    <Goblin key={goblin.id} goblin={goblin} />
  ));

  return (
    <>
      <h1>Goblins are coming...</h1>
      <GoblinForm setGoblins={setGoblins} />
      
      <footer>
        {goblins.length && !goblinToUpdate &&
          <GoblinSelect
            goblins={goblins}
            onGoblinSubmit={onGoblinSubmit}
            onGoblinToUpdateSelect={onGoblinToUpdateSelect}
          />
        }
        {goblinToUpdate &&
          <GoblinUpdate
            {...goblinToUpdate}
            setGoblins={setGoblins}
            setGoblinToUpdate={setGoblinToUpdate}
          />
        }
      </footer>

      <main>
        {goblinsToDisplay}
      </main>
    </>
  );
};

export default App;

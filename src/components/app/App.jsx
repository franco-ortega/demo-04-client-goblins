import React, { useEffect, useState } from 'react';
import { findGoblins } from '../../services/findGoblins';
import Goblin from '../goblins/Goblin';
import GoblinForm from '../goblins/GoblinForm';
import GoblinSelect from '../goblins/GoblinSelect';
import GoblinUpdate from '../goblins/GoblinUpdate';

const App = () => {
  const [goblins, setGoblins] = useState([]);
  const [goblinToUpdate, setGoblinToUpdate] = useState(null);

  useEffect(() => {
    findGoblins()
      .then(res => setGoblins(res));
  }, []);

  const goblinsList = goblins.map(goblin => (
    <Goblin key={goblin.id} goblin={goblin} />
  ));

  return (
    <>
      <h1>Goblins are coming...</h1>
      <GoblinForm setGoblins={setGoblins} />
      
      <footer>
        {goblins.length > 0 && !goblinToUpdate &&
          <GoblinSelect
            goblins={goblins}
            setGoblinToUpdate={setGoblinToUpdate}
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
        {goblinsList}
      </main>
    </>
  );
};

export default App;

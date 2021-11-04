import { useState } from 'react';

export const useValue = (startingValue, setRemainingAvailable) => {
  const [value, setValue] = useState(startingValue);

  const increaseValue = () => {
    setValue(prevState => prevState + 1);
    setRemainingAvailable(prevState => prevState - 1);
  };

  const decreaseValue = () => {
    setValue(prevState => prevState - 1);
    setRemainingAvailable(prevState => prevState + 1);
  };

  return {
    value,
    increaseValue,
    decreaseValue
  };
};

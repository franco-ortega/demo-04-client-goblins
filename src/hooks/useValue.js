import { useState } from 'react';

export const useValue = (startingValue, valueSpender) => {
  const [value, setValue] = useState(startingValue);

  const increaseValue = () => {
    setValue(prevState => prevState + 1);
    valueSpender(prevState => prevState - 1);
  };

  const decreaseValue = () => {
    setValue(prevState => prevState - 1);
    valueSpender(prevState => prevState + 1);
  };

  return {
    value,
    increaseValue,
    decreaseValue
  };
};

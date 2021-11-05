import { useState } from 'react';

export const useValue = (startingValue, setRemainingAvailable) => {
  const [currentValue, setCurrentValue] = useState(startingValue);

  const increaseValue = () => {
    setCurrentValue(prevState => prevState + 1);
    setRemainingAvailable(prevState => prevState - 1);
  };

  const decreaseValue = () => {
    setCurrentValue(prevState => prevState - 1);
    setRemainingAvailable(prevState => prevState + 1);
  };

  return {
    currentValue,
    setCurrentValue,
    increaseValue,
    decreaseValue
  };
};

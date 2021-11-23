// const API_URL = process.env.REACT_APP_API_URL;
const LOCALHOST_URL = process.env.REACT_APP_LOCALHOST_URL;

export const findGoblins = async() => {
  return await fetch(LOCALHOST_URL)
    .then(res => res.json())
    .then(res => res.sort((a, b) => a.id - b.id));
};

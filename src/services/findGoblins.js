const API_URL = process.env.REACT_APP_API_URL;
// const LOCALHOST_URL = process.env.REACT_APP_LOCALHOST_URL;

export const findGoblins = async() => {
  return await fetch(API_URL)
    .then(res => res.json());
};

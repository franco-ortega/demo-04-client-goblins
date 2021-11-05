const API_URL = process.env.REACT_APP_API_URL;
// const LOCALHOST_URL = process.env.REACT_APP_LOCALHOST_URL;

export const insertGoblin = async(goblin) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goblin)
  })
    .then(res => res.json());
};

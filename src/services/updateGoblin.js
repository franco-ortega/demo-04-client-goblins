const API_URL = process.env.REACT_APP_API_URL;
// const LOCALHOST_URL = process.env.REACT_APP_LOCALHOST_URL;

export const updateGoblin = async(id, goblin) => {
  return await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goblin)
  })
    .then(res => res.json());
};

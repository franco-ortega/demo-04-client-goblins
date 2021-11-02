export const findGoblins = async() => {
  return await fetch('http://localhost:4500/api/v1/goblins')
    .then(res => res.json());
};

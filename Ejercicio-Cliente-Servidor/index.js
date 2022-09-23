const axios = require("axios");
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;

  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((personaje) => Object.values(personaje).join(", "))
    .join('\n');
    
    let headers = results
    .map((header) => {
      return {
        id: header.id,
        name: header.name,
        status: header.status,
        species: header.species,
      };
    })
    .map((head) => Object.keys(head).join(", "))[0]
    
    await fs.writeFile(path.join(__dirname, 'data.csv'),headers+"\n"+characters);
    // console.log(path.join(__dirname, 'data.csv'));
//   console.log(characters);
console.log('Listo');
};

main();

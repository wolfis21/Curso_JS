const axios = require("axios");
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  let response = await axios.get("https://breakingbadapi.com/api/characters");
  let {data} = response;

  let characters = data
    .map((character) => {
      return {
        char_id: character.char_id,
        name: character.name,
        nickname: character.nickname,
        portrayed: character.portrayed,
        
      };
    })
    .map((personaje) => Object.values(personaje).join(", "))
    .join('\n');
    
    let headers = data
    .map((header) => {
      return {
        char_id: header.char_id,
        name: header.name,
        nickname: header.nickname,
        portrayed: header.portrayed,
        
      };
    })
    .map((head) => Object.keys(head).join(", "))[0]
    
    await fs.writeFile(path.join(__dirname, 'data.csv'),headers+"\n"+characters);
    // console.log(path.join(__dirname, 'data.csv'));
//   console.log(characters);
console.log('Listo');
};

main();
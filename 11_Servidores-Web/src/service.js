const data = require('./MOCK_DATA.json');
const joi = require('joi');

module.exports = {
    getUsers: ()=>data,
    getUser: (id)=>{
        let identificador = Number(id);
        let user= data.filter((person)=> person.id === identificador)[0];
        return user;
    },
    createUser: (dataUser) =>{
        let newUser = {
            id: data.length + 1,
            ...dataUser,

        }
        data.push(newUser);
        return newUser;
    },
    updateUser: (id, newUpdater) => {
        let identificador = Number(id);
        var usuarioActualizado = data.find((usuarioActualizado) => usuarioActualizado.id === identificador);
        usuarioActualizado.first_name = newUpdater.first_name;
        usuarioActualizado.last_name = newUpdater.last_name;
        usuarioActualizado.email = newUpdater.email;
        return newUpdater;
      },
     
      validatos: (user) => {
        const schema = joi.object({
          first_name: joi.string().min(6).required(),
          last_name: joi.string().min(6).required(),
          email: joi.string().min(6).required().email(),
        });
     
        const validation = schema.validate(user);
        return validation;
      }
};
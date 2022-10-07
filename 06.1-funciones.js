//se puede llamar primero antes de declarar

let resp = sumarTodo(1,2,3,4,5);
console.log(resp);


//funcion que recorre todos los argumentos pasados por parametro
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length;i++){
        suma+=arguments[i];
    }
    return suma;

}

/* ************************************************** */
 
//paso por referencia 

const persona={
    nombre: 'Isaac',
    apellido: 'Saado',
    edad: 22
}
console.log(persona); //no se hizo el cambio

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
}

cambiarValorObjeto( persona); // se hizo el cambio 

console.log(persona);


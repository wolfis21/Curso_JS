// ---Ciclos

// ========= while

// while(condicion...){
    //code
// }

var i =0;
while( i<=4){
    console.log("hola");
    i++;
}

// ======= do While

// do{
//  code
// }while(condicion)

var i=0;
do{
console.log('Hola q tal');
i++;
}while(i<=4)

// ====== for

for(let i = 0;i<=4;i++){
    console.log('Hola ff');
}

// ========== for -- in

// for (variable operadorIN objeto){
//     code
// }

var persona = {
    name: 'Isaac',
    sub: 'saado',
    edad: 22
}
for(let clave in persona){
    console.log(clave, persona[clave]);
}

// ======= For  ----  of

var arreglo = [1,2,3,4,5]
var string = 'Alejandro'

for(let valor of string){
    console.log(valor);
}
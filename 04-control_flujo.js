
//control de flujo

//=----------- IF

// if (condicion){

// }

var llueve = false; 

if(llueve){
    console.log('Esta lloviendo');
}

var admin = 'administrador' ; 

if(admin === 'administrador'){
    console.log('Bienvenido al Sistema');
}

// If ELSE

const MAYOR_EDAD = 18;
var edadPersona = 12;

if (edadPersona >= MAYOR_EDAD){
    console.log('usted puede acceder');
}else{
    console.log('Acceso Restringuido');
}

// ===========================

var semaforo = 'amarillo';

if (semaforo === 'Verde' ||semaforo === 'verde' ){
    console.log('Arranca');
}else if (semaforo === 'Amarillo' || semaforo === 'amarillo'){
    console.log('con calma');
}else if (semaforo === 'Rojo' || semaforo === 'rojo'){
    console.log('Esperar');
}else{
    console.log('ERROR');
}

// SWITCH

var semaforo = 'verde';

switch (semaforo){
    case 'Verde':
        case 'verde':
        console.log('Arranca');
        break;
    case 'Amarillo':
        case 'amarillo':
        console.log('Con calma');
        break;
    case 'Rojo':
        case 'rojo':
        console.log('Esperar');
        break;
    default:
        console.log('ERROR');
        break;       
}
//Escribir un programa que según el día de la 
//semana ingresado proporcione el día en inglés.

var dia = 'lunes';

switch (dia){
    case 'lunes':
        case 'Lunes':
        console.log('Is Monday')
        break;
    case 'Martes':
        case 'martes':
        console.log('Is Tuesday')
        break;
    case 'Miercoles':
        case 'miercoles':
        console.log('Is Wednesday')
        break;
    case 'jueves':
        case 'Jueves':
        console.log('Is thursday')
        break;
    case 'Viernes':
        case 'viernes':
        console.log('Is Friday')
        break;
    case 'sabado':
        case 'Sabado':
        console.log('Is saturday')
        break;
    case 'Domingo':
        case 'domingo':
        console.log('Is Sunday')
        break;
}

//con if else 

if (dia === 'lunes' || dia === 'Lunes'){
    console.log('Is Monday')
}else if (dia === 'martes' || dia === 'Martes'){
    console.log('Is Tuesday')
}else if (dia === 'miercoles' || dia === 'Miecoles'){
    console.log('Is Wednesday')
}else if (dia === 'jueves' || dia === 'Jueves'){
    console.log('Is thursday')
}else if (dia === 'viernes' || dia === 'Viernes'){
    console.log('Is Friday')
}else if (dia === 'sabado' || dia === 'Sabado'){
    console.log('Is saturday')
}else if (dia === 'domingo' || dia === 'Domingo'){
    console.log('Is Sunday')
}
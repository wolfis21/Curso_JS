//Escribir un programa que según
// el total de la compra, se agregue un valor de envio.

var precio = 18;
var envio = 0;
if(precio <=10){
    envio = 3;
    precio +=envio;
    console.log('Total a pagar: '+precio);
}else if (precio <= 20 && precio >10){
    envio = 5;
    precio +=envio;
    console.log('Total a pagar: '+precio);
}else if (precio <=50 && precio >20){
    envio = 7;
    precio +=envio;
    console.log('Total a pagar: '+precio);
}else if(precio >50){
    console.log('Total a pagar: '+precio);
}
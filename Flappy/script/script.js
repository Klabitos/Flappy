document.body.addEventListener("keydown", comprobanteTecla);
var cuadradoQueSeMueve = document.getElementById("cuadradoPrueba"); //77 top //45 left centro

function comprobanteTecla(evento){
    conClickTeclado(evento);
    comprobarMovimiento(evento);
}

function comprobarMovimiento(evento){
    switch(evento.key){
        case "w":
            movimientoArriba(evento);
            break;
        case "a":
            movimientoIzq(evento);
            break;
        case "s":
            movimientoAbajo(evento);
            break;
        case "d":
            movimientoDerecha(evento);
            break;
    }
}

function conClickTeclado(evento){
    let pLog = document.getElementById("keyLog");
    pLog.innerText=`TECLA: ${evento.key} y CÓDIGO: ${evento.keyCode}`;
}

function movimientoIzq(evento){
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
    cuadradoQueSeMueve.style.left = (topVal - 100) + "px";
    
    
}

function movimientoDerecha(evento){
    
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
    cuadradoQueSeMueve.style.left = (topVal + 100) + "px";

}

function movimientoArriba(evento){
    
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
    cuadradoQueSeMueve.style.top = (topVal - 100) + "px";

}

function movimientoAbajo(evento){

    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
    cuadradoQueSeMueve.style.top = (topVal + 100) + "px";
}
document.body.addEventListener("keydown", comprobanteTecla);
var cuadradoQueSeMueve = document.getElementById("cuadradoPrueba"); 
var pantalla = document.getElementsByClassName("pantalla")[0];

function comprobanteTecla(evento){
    conClickTeclado(evento);
    comprobarMovimiento(evento);
}

function comprobarMovimiento(evento){
    switch(evento.key.toLowerCase()){
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
    let rect = pantalla.getBoundingClientRect(); //PARA QUE SEA RELATIVO A LA VISTA
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
    if(topVal-10>rect.left){
        cuadradoQueSeMueve.style.left = (topVal - 10) + "px";
    }
    
}

function movimientoDerecha(evento){
    let rect = pantalla.getBoundingClientRect();
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
    if(topVal+80<rect.right){
        cuadradoQueSeMueve.style.left = (topVal + 10) + "px";
    }
    
}

function movimientoArriba(evento){
    let rect = pantalla.getBoundingClientRect();
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
    if(topVal-10>rect.top){
        cuadradoQueSeMueve.style.top = (topVal - 10) + "px";
    }
}

function movimientoAbajo(evento){
    let rect = pantalla.getBoundingClientRect();
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
    if(topVal+82<rect.bottom){
        cuadradoQueSeMueve.style.top = (topVal + 10) + "px";
    }
}
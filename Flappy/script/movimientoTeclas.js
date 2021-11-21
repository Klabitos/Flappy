//document.body.addEventListener("keydown", comprobanteTecla);


var cuadradoQueSeMueve = document.getElementById("cuadradoPrueba"); 
var pantalla = document.getElementsByClassName("pantalla")[0];
document.body.addEventListener("keyup", comprobanteTeclaLevantar);


//Para permitir el movimiento mientras se dispara, y que aunque no registre el keyDown siga moviendose hasta el keyUp
var movIzqActivo=false;
var intervaloIzq;
var movDerActivo=false;
var intervaloDer;
var movArrActivo=false;
var intervaloArr;
var movAbajActivo=false;
var intervaloAbaj;

function comprobanteTecla(evento){
    comprobarMovimiento(evento);
    comprobarBomba(evento);
    if(evento.keyCode==17){//control izq
        deBugMovimiento();
    }
}

function deBugMovimiento(){ //No se si funciona aun
    movIzqActivo=false;
    movDerActivo=false;
    movArrActivo=false;
    movAbajActivo=false;
    clearInterval(intervaloIzq);
    clearInterval(intervaloDer);
    clearInterval(intervaloArr);
    clearInterval(intervaloAbaj);
}

function comprobanteTeclaLevantar(evento){
    switch(evento.key.toLowerCase()){
        case "w":
            movArrActivo=false;
            break;
        case "a":
            movIzqActivo=false;
            break;
        case "s":
            movAbajActivo=false;
            break;
        case "d":
            movDerActivo=false;
            break;
    }
}

function comprobarMovimiento(evento){
    switch(evento.key.toLowerCase()){
        case "w":
            movimientoArriba();
            comprobarChoqueSuelo();
            break;
        case "a":
            movimientoIzq();
            comprobarChoqueSuelo();
            break;
        case "s":
            movimientoAbajo();
            comprobarChoqueSuelo();
            break;
        case "d":
            movimientoDerecha();
            comprobarChoqueSuelo();
            break;
    }
}



function comprobarBomba(evento){
    if(evento.keyCode=="32"){
        generarBomba();
    }
}

function movimientoIzq(){
    let rect = pantalla.getBoundingClientRect(); //PARA QUE SEA RELATIVO A LA VISTA
    let topVal;
    if(!movIzqActivo){ //Para que solo entre una vez con cada primer keydown
        movIzqActivo=true;
        intervaloIzq=setInterval(() => {
            topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
            if(topVal-15>rect.left){ //Para que no se pase del limite de nuestra pantalla
                cuadradoQueSeMueve.style.left = (topVal - 20) + "px";
            }
            if(!movIzqActivo){
                clearInterval(intervaloIzq);
            }
        }, 35);
    }
}

function movimientoDerecha(){
    let rect = pantalla.getBoundingClientRect();
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
    if(!movDerActivo){ //Para que solo entre una vez con cada primer keydown
        movDerActivo=true;
        intervaloDer=setInterval(() => {
            topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"),10);
            if(topVal+80<rect.right){ //Para que no se pase del limite de nuestra pantalla
                cuadradoQueSeMueve.style.left = (topVal + 20) + "px";
            }
            if(!movDerActivo){
                clearInterval(intervaloDer);
            }
        }, 35);
    }
}

function movimientoArriba(){
    let rect = pantalla.getBoundingClientRect();
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
    if(!movArrActivo){ //Para que solo entre una vez
        movArrActivo=true;
        intervaloArr=setInterval(() => {
            topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
            if(topVal-10>rect.top){ //Para que no se pase del limite de nuestra pantalla
                cuadradoQueSeMueve.style.top = (topVal - 20) + "px";
            }
            if(!movArrActivo){
                clearInterval(intervaloArr);
            }
        }, 35);
    }
}

function movimientoAbajo(evento){
    let rect = pantalla.getBoundingClientRect();
    var topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
    if(!movAbajActivo){ //Para que solo entre una vez
        movAbajActivo=true;
        intervaloAbaj=setInterval(() => {
            topVal = parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"),10);
            if(topVal+82<rect.bottom){ //Para que no se pase del limite de nuestra pantalla
                cuadradoQueSeMueve.style.top = (topVal + 20) + "px";
            }
            if(!movAbajActivo){
                clearInterval(intervaloAbaj);
            }
        }, 35);
    }
}


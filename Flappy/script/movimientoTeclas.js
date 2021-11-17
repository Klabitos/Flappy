

document.body.addEventListener("keydown", comprobanteTecla);
document.body.addEventListener("keyup", comprobanteTeclaLevantar);
var cuadradoQueSeMueve = document.getElementById("cuadradoPrueba"); 
var pantalla = document.getElementsByClassName("pantalla")[0];


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
        bombaFuncionalidad();
    }
}


function movimientoIzq(){
    let rect = pantalla.getBoundingClientRect(); //PARA QUE SEA RELATIVO A LA VISTA
    let topVal;
    if(!movIzqActivo){ //Para que solo entre una vez
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
    if(!movDerActivo){ //Para que solo entre una vez
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

function comprobarChoqueSuelo(){
    let rect = pantalla.getBoundingClientRect();    
    if(parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"))>rect.bottom-80){
        choqueNaveSuelo();
    }
}
function choqueNaveSuelo(){
    let bombaCreada = document.createElement("div");
    bombaCreada.classList.add("bomba");
    bombaCreada.style.position="absolute";
    bombaCreada.style.zIndex=3;
    bombaCreada.style.left=window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left");
    bombaCreada.style.top=parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"))+Number(50)+"px";
    pantalla.appendChild(bombaCreada);
    explotar(bombaCreada);
}
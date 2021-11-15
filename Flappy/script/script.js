document.body.addEventListener("keydown", conClickTeclado);


function conClickTeclado(evento){
    let pLog = document.getElementById("keyLog");
    pLog.innerText=`TECLA: ${evento.key} y CÓDIGO: ${evento.keyCode}`;
}

function movimientoIzq(){

}

function movimientoDerecha(){

}

function movimientoArriba(){

}

function movimientoAbajo(){}
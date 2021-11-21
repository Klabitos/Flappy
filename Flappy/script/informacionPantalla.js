var velocidad = 1;
var numeroDisparosTotalesDisponibles = 2;

//Para cambios genericos en barra de Vida
var numVida = 100;

document.body.addEventListener("load", generarBarraVida()); // () para que lo haga instant

function generarBarraVida(){
    let elementoContenedor = document.getElementById("vidas");
    let divCreado;
    for(let i=0; i<numVida; i++){
        divCreado=document.createElement("div");
        divCreado.classList.add("vida");
        divCreado.classList.add("vidaStandard");
        divCreado.innerHTML="&nbsp;";
        elementoContenedor.append(divCreado);
        if(i==numVida-1){
            divCreado.classList.add("ultimaVida");
        }else if(i==0){
            divCreado.classList.add("primeraVida");
        }
    }
}

function disminuirVida(){
    let todaLaVidaVerde = document.querySelectorAll(".vidaStandard");
    todaLaVidaVerde[todaLaVidaVerde.length-1].classList.replace("vidaStandard", "vidaPerdida");
    comprobarDerrota();
}

function comprobarDerrota(){
    let todaLaVidaRoja = document.querySelectorAll(".vidaPerdida");
    if(todaLaVidaRoja.length==numVida){
        alert("Has perdido");
    }
}

function tripleKillAndSo(kills){
    let textoEnPantalla = document.getElementById("kills");
    
    switch(kills){
        case 1:
            textoEnPantalla.innerText="Kill";
            textoEnPantalla.className="kill";
            break;
        case 2:
            textoEnPantalla.innerText="DOUBLE Kill!";
            textoEnPantalla.className="dobleKill";
            break;
        case 3:
            textoEnPantalla.innerText="TRIPLE KILL!!!";
            textoEnPantalla.className="tripleKill";
            aumentoVelocidad();
            break;
        case 4:
            textoEnPantalla.innerText="CUADRAAAAAAA KILL!!!";
            textoEnPantalla.className="cuadraKill";
            aumentoVelocidad();
            aumentarBalasDisponibles();
            break;
    }
}
function aumentarBalasDisponibles(){
    let numeroDisparosDisponibles = document.getElementById("balas");
    numeroDisparosTotalesDisponibles++;
    numeroDisparosDisponibles.innerText=numeroDisparosTotalesDisponibles;
}

function aumentoVelocidad(){
    let velocidadPantalla = document.getElementById("velocidad");
    velocidad++;
    velocidadPantalla.innerText=velocidad;
}

function aumentarPuntuacionUnMuerto(){
    let puntuacionSpan = document.getElementById("puntuacion");
    let puntuacionNumero = parseInt(puntuacionSpan.innerText);
    puntuacionSpan.innerText=puntuacionNumero+Number(100); 
    if(parseInt(puntuacionSpan.innerText)%1000==0){
        aumentoVelocidad();
    }   
}

function disminuirPuntuacion(){
    let textoEnPantalla = document.getElementById("kills");
    let puntuacionSpan = document.getElementById("puntuacion");
    let puntuacionNumero = parseInt(puntuacionSpan.innerText);
    textoEnPantalla.innerText="Escapado :(";
    textoEnPantalla.className="escapado";
    disminuirVida();
    puntuacionSpan.innerText=puntuacionNumero-Number(50);   
}
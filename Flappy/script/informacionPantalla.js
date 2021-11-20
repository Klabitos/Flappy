var dificultad = 0;
var numeroDisparosTotalesDisponibles = 2;


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
            aumentoDificultad();
            break;
        case 4:
            textoEnPantalla.innerText="CUADRAAAAAAA KILL!!!";
            textoEnPantalla.className="cuadraKill";
            aumentoDificultad();
            aumentarBalasDisponibles();
            break;
    }
}
function aumentarBalasDisponibles(){
    let numeroDisparosDisponibles = document.getElementById("balas");
    numeroDisparosTotalesDisponibles++;
    numeroDisparosDisponibles.innerText=numeroDisparosTotalesDisponibles;
}

function aumentoDificultad(){
    let dificultadPantalla = document.getElementById("dificultad");
    dificultad++;
    dificultadPantalla.innerText=dificultad;
}

function aumentarPuntuacionUnMuerto(){
    let puntuacionSpan = document.getElementById("puntuacion");
    let puntuacionNumero = parseInt(puntuacionSpan.innerText);
    puntuacionSpan.innerText=puntuacionNumero+Number(100); 
    if(parseInt(puntuacionSpan.innerText)%1000==0){
        aumentoDificultad();
    }   
}

function disminuirPuntuacion(){
    let textoEnPantalla = document.getElementById("kills");
    let puntuacionSpan = document.getElementById("puntuacion");
    let puntuacionNumero = parseInt(puntuacionSpan.innerText);
    textoEnPantalla.innerText="Escapado :(";
    textoEnPantalla.className="escapado";
    
    puntuacionSpan.innerText=puntuacionNumero-Number(50);   
}
var listaHumanos = [];
var dificultad = 0;
var seedHumanos;


function generacionHumanos(){
    seedHumanos = setInterval(() => {
        comprobarGenerarHumanos();
    }, 1000);
}
function comprobarGenerarHumanos(){
    if(listaHumanos.length<dificultad+Number(10)){
        unHumanoNuevo();
    }
}
function unHumanoNuevo(){
    let rect = pantalla.getBoundingClientRect();
    let humano = document.createElement("div");
    humano.classList.add("humano");
    humano.style.position="absolute";
    humano.style.top=rect.bottom-60+"px";
    if((Math.floor((Math.random() * 2) + 1)%2)==0){
        humano.style.left=rect.left+"px";
    }else{
        humano.style.left=rect.right-Number(80)+"px";
    }
    pantalla.appendChild(humano);
    movimientoHumanos(humano);
    listaHumanos.push(humano);
}
function movimientoHumanos(humano){
    movimientoDerechaHumano(humano);
}

function movimientoDerechaHumano(humano){
    let rect = pantalla.getBoundingClientRect();
    let intervaloDerecha;
    intervaloDerecha = setInterval(() => {
        humano.style.left=(parseInt(humano.style.left)+Number(5)) + "px";
        if((parseInt(humano.style.left)>rect.right-50)){
            clearInterval(intervaloDerecha);
            movimientoIzquierdaHumano(humano);
        }
    }, 50);
}

function movimientoIzquierdaHumano(humano){
    let rect = pantalla.getBoundingClientRect();
    let intervaloIzquierda;
    intervaloIzquierda = setInterval(() => {
        humano.style.left=(parseInt(humano.style.left)-Number(5)) + "px";
        if(parseInt(humano.style.left)<rect.left+10){
            clearInterval(intervaloIzquierda);
            movimientoDerechaHumano(humano);
        }
    }, 50);
}


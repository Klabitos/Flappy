var listaHumanos = [];
var dificultad = 0;
var seedHumanos;

class Humano{
    constructor(velocidad, fondoHaciaIzquierda, fondoHaciaDerecha, aparicion, div){
        this.velocidad = velocidad;
        this.fondoHaciaIzquierda = fondoHaciaIzquierda;
        this.fondoHaciaDerecha = fondoHaciaDerecha;
        this.aparicion = aparicion;
        this.div = div;
    }
    obtenerPosicionIzquierda(){
        return this.div.style.left;
    }
    obtenerPosicionAlta(){
        return this.div.style.top;
    }
    darClase(){
        this.div.classList.add("humano");
    }
    obtenerDiv(){
        return this.div;
    }
    obtenerVelocidad(){
        return 100-this.velocidad;
    }
}


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
    let rect = pantalla.getBoundingClientRect(); //TODO usar la velocidad y la aparicion
    let humano = tipoDeHumano();
    humano.darClase();
    humano.obtenerDiv().style.top=rect.bottom-60+"px";
    if(humano.aparicion==1){
        humano.obtenerDiv().style.left=rect.left+"px";
        humano.obtenerDiv().style.backgroundImage=humano.fondoHaciaDerecha;
    }else{
        humano.obtenerDiv().style.left=rect.right-Number(80)+"px";
        humano.obtenerDiv().style.backgroundImage=humano.fondoHaciaIzquierda;
    }
    pantalla.appendChild(humano.obtenerDiv());
    movimientoHumanos(humano);
    listaHumanos.push(humano);
}

function tipoDeHumano(){
    let numeroAleatorio = randomIntFromInterval(1,4);
    let humano;
    switch(numeroAleatorio){
        case 1:
            humano = new Humano(randomIntFromInterval(45,65),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",randomIntFromInterval(1,2),document.createElement("div"));
            break;
        case 2:
            humano = new Humano(randomIntFromInterval(35,45),"url(../img/humano/chicaTriste.png","url(../img/humano/chicaTriste2.png",randomIntFromInterval(1,2),document.createElement("div"));
            break;
        case 3:
            humano = new Humano(randomIntFromInterval(75,80),"url(../img/humano/corredor.png","url(../img/humano/corredor2.png",randomIntFromInterval(1,2),document.createElement("div"));
            break;
        case 4:
            humano = new Humano(randomIntFromInterval(45,55),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",randomIntFromInterval(1,2),document.createElement("div"));
            break;
        case 5:
            humano = new Humano(randomIntFromInterval(45,55),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",randomIntFromInterval(1,2),document.createElement("div"));
            break;    
    }
    return humano;
}

function movimientoHumanos(humano){
    if(humano.aparicion==1){
        movimientoDerechaHumano(humano);
    }else{
        movimientoIzquierdaHumano(humano);
    }
    
}

function movimientoDerechaHumano(humano){
    let rect = pantalla.getBoundingClientRect();
    let intervaloDerecha;
    intervaloDerecha = setInterval(() => {
        humano.obtenerDiv().style.left=(parseInt(humano.obtenerDiv().style.left)+Number(5)) + "px";
        if((parseInt(humano.obtenerDiv().style.left)>rect.right-50)){
            clearInterval(intervaloDerecha);
            movimientoIzquierdaHumano(humano);
        }
    }, humano.obtenerVelocidad());
}

function movimientoIzquierdaHumano(humano){
    let rect = pantalla.getBoundingClientRect();
    let intervaloIzquierda;
    intervaloIzquierda = setInterval(() => {
        humano.obtenerDiv().style.left=(parseInt(humano.obtenerDiv().style.left)-Number(5)) + "px";
        if(parseInt(humano.obtenerDiv().style.left)<rect.left+10){
            clearInterval(intervaloIzquierda);
            movimientoDerechaHumano(humano);
        }
    },  humano.obtenerVelocidad());
}




//otros


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


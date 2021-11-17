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
    let rect = pantalla.getBoundingClientRect();
    let humano = new Humano(randomIntFromInterval(45,55),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",1,document.createElement("div"));
    humano.darClase();
    humano.obtenerDiv().style.top=rect.bottom-60+"px";
    if((Math.floor((Math.random() * 2) + 1)%2)==0){
        humano.obtenerDiv().style.left=rect.left+"px";
        humano.obtenerDiv().style.backgroundImage=humano.fondoHaciaDerecha;
    }else{
        humano.obtenerDiv().style.left=rect.right-Number(80)+"px";
        humano.obtenerDiv().style.backgroundImage=humano.fondoHaciaIzquierda;
    }
    pantalla.appendChild(humano.obtenerDiv());
    movimientoHumanos(humano.obtenerDiv());
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




//otros


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


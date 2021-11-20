
var listaHumanos = [];

var seedHumanos;
var numId = 0;
var id = () => {
    numId==100?numId=0:0;
    numId++;
    return numId;
}

class Humano{
    constructor(velocidad, fondoHaciaIzquierda, fondoHaciaDerecha, aparicion, div, idHumano){
        this.velocidad = velocidad;
        this.fondoHaciaIzquierda = fondoHaciaIzquierda;
        this.fondoHaciaDerecha = fondoHaciaDerecha;
        this.aparicion = aparicion;
        this.div = div;
        this.idHumano = idHumano;
        this.intervalo = 0;
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
    establecerIntervaloMovimiento(intervalo){
        this.intervalo=intervalo;
    }
    obtenerIntervaloMovimiento(){
        return this.intervalo;
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
    
}

function tipoDeHumano(){
    let numeroAleatorio = randomIntFromInterval(1,5);
    let humano;
    switch(numeroAleatorio){
        case 1:
            humano = new Humano(randomIntFromInterval(45,65),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",randomIntFromInterval(1,2),document.createElement("div"), id());
            break;
        case 2:
            humano = new Humano(randomIntFromInterval(35,45),"url(../img/humano/chicaTriste.png","url(../img/humano/chicaTriste2.png",randomIntFromInterval(1,2),document.createElement("div"),id());
            break;
        case 3:
            humano = new Humano(randomIntFromInterval(75,80),"url(../img/humano/corredor.png","url(../img/humano/corredor2.png",randomIntFromInterval(1,2),document.createElement("div"),id());
            break;
        case 4:
            humano = new Humano(randomIntFromInterval(45,55),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",randomIntFromInterval(1,2),document.createElement("div"),id());
            break;
        case 5:
            humano = new Humano(randomIntFromInterval(45,55),"url(../img/humano/caminante.png","url(../img/humano/caminante2.png",randomIntFromInterval(1,2),document.createElement("div"),id());
            break;    
    }
    listaHumanos.push(humano);
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
    humano.establecerIntervaloMovimiento(setInterval(() => {
        humano.obtenerDiv().style.left=(parseInt(humano.obtenerDiv().style.left)+Number(5)) + "px";
        if((parseInt(humano.obtenerDiv().style.left)>rect.right-Number(40))){
            clearInterval(humano.obtenerIntervaloMovimiento());
            escapar(humano);
        }
    }, humano.obtenerVelocidad()));
}

function movimientoIzquierdaHumano(humano){
    let rect = pantalla.getBoundingClientRect();
    let intervaloIzquierda;
    humano.establecerIntervaloMovimiento(setInterval(() => {
        humano.obtenerDiv().style.left=(parseInt(humano.obtenerDiv().style.left)-Number(5)) + "px";
        if(parseInt(humano.obtenerDiv().style.left)<rect.left){
            clearInterval(humano.obtenerIntervaloMovimiento());
            escapar(humano);
        }
    },  humano.obtenerVelocidad()));
}


function escapar(humano){
    humano.obtenerDiv().remove();
    delete humano;
    for(var i = 0; i < listaHumanos.length; i++) {
        if (listaHumanos[i].idHumano == humano.idHumano) {
            listaHumanos.splice(i,1);
            break;
        }
    }
disminuirPuntuacion()
}


//otros


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


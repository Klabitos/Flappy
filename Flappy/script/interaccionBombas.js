var numeroBombasEnElAire=0;

function bombaFuncionalidad(){
    generarBomba();
}

function generarBomba(){
    if(numeroBombasEnElAire<numeroDisparosTotalesDisponibles){
        let bombaCreada = document.createElement("div");
        bombaCreada.classList.add("bomba");
        bombaCreada.style.left=parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"))+"px";
        bombaCreada.style.top=parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"))+Number(50)+"px";
        pantalla.appendChild(bombaCreada);
        numeroBombasEnElAire++;
        gravedad(bombaCreada);
    }
}

function gravedad(bomba){
    let rect = pantalla.getBoundingClientRect();
    let intervalo;
    
    intervalo=setInterval(() => {
        bomba.style.top=(parseInt(bomba.style.top)+Number(10)) + "px";
        if((parseInt(bomba.style.top)>rect.bottom-27)){
            clearInterval(intervalo);
            explotar(bomba);
            numeroBombasEnElAire--;
        }
    }, 20);
        
}

function explotar(bomba){
    bomba.classList.replace("bomba","bomba_explosion")
    bomba.style.top=(parseInt(bomba.style.top)-Number(50)) + "px";
    bomba.style.left=(parseInt(bomba.style.left)-Number(20)) + "px";
    comprobarSiMuerto(bomba);
    setTimeout(() => {
        bomba.style.opacity="0.5";
    }, 300);
    setTimeout(() => {
        bomba.style.opacity="0";
        bomba.remove();
    }, 600);
}

function comprobarSiMuerto(bomba){
    let muertesEstaBomba=0;
    let humano;
    for(let i=0; i<listaHumanos.length; i++){
        humano=listaHumanos[i];
        if((parseInt(humano.obtenerDiv().style.left)+Number(30)>parseInt(bomba.style.left) && parseInt(humano.obtenerDiv().style.left)<parseInt(bomba.style.left)+Number(90)) ||(parseInt(humano.obtenerDiv().style.left)+Number(60)>parseInt(bomba.style.left) && parseInt(humano.obtenerDiv().style.left)<parseInt(bomba.style.left)+Number(90)) ){
            humano.obtenerDiv().remove();
            delete humano;
            listaHumanos.splice(i,1);
            clearInterval(humano.intervalo); //para que se pare lo establecido en el intervalo (el escapar)
            if(humano instanceof Policia){
                clearInterval(humano.intervaloDisparar);
            }
            aumentarPuntuacionUnMuerto();
            muertesEstaBomba++;
        }
    }
    tripleKillAndSo(muertesEstaBomba);
}

function comprobarChoqueSuelo(){
    let rect = pantalla.getBoundingClientRect();    
    if(parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"))>rect.bottom-100){
        choqueNaveSuelo();
        disminuirVida();
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
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

function golpeoDisparoNave(bala, intervalo){
    let ladoIzquierdoNave = parseInt(cuadradoQueSeMueve.style.left);
    let ladoBottomNave = parseInt(cuadradoQueSeMueve.style.top)+Number(40);
    let ladoRightNave = parseInt(cuadradoQueSeMueve.style.left)+Number(40);
    let ladoTopNave = parseInt(cuadradoQueSeMueve.style.top);
    if(parseInt(bala.style.top)-Number(10)<ladoBottomNave && parseInt(bala.style.top)>ladoTopNave){ //15 es un ajuste por el tamaño de la imagen
        //Misma Altura //Tiene que haberse movido en todas las direcciones al menos una vez para que la bal lo detecte, sino necesitariamos el windows.getComputed
        if(parseInt(bala.style.left)>ladoIzquierdoNave && parseInt(bala.style.left)<ladoRightNave){
            //Hit
            explotarBala(bala, intervalo);
            disminuirVidaBalazo(5);
        }

    }
}

function explotarBala(bala, intervalo){
    bala.style.backgroundImage = "url(../img/bomba/Explosion.png)";  
    bala.style.zIndex = "4";  
    clearInterval(intervalo);
    setTimeout(() => {
        bala.remove();
    }, 300);
}
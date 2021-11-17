


function bombaFuncionalidad(){
    generarBomba();
}

function generarBomba(){
    let bombaCreada = document.createElement("div");
    bombaCreada.classList.add("bomba");
    bombaCreada.style.position="absolute";
    bombaCreada.style.zIndex=3;
    bombaCreada.style.left=parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"))+"px";
    bombaCreada.style.top=parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top"))+Number(50)+"px";
    pantalla.appendChild(bombaCreada);
    gravedad(bombaCreada);
}

function gravedad(bomba){
    let rect = pantalla.getBoundingClientRect();
    let intervalo;
    
    intervalo=setInterval(() => {
        bomba.style.top=(parseInt(bomba.style.top)+Number(10)) + "px";
        if((parseInt(bomba.style.top)>rect.bottom-27)){
            clearInterval(intervalo);
            explotar(bomba);
        }
    }, 20);
        
}

function explotar(bomba){
    let rect = pantalla.getBoundingClientRect();
    bomba.classList.replace("bomba","bomba_explosion")
    bomba.style.top=(parseInt(bomba.style.top)-Number(50)) + "px";
    humanoMuerto(bomba);
    setTimeout(() => {
        bomba.style.opacity="0.5";
    }, 300);
    setTimeout(() => {
        bomba.style.opacity="0";
        bomba.remove();
    }, 600);
}

function humanoMuerto(bomba){
    comprobarSiMuerto(bomba);
}


function comprobarSiMuerto(bomba){
    let muertesEstaBomba=0;
    for(let i=0; i<listaHumanos.length; i++){
        if(parseInt(listaHumanos[i].obtenerDiv().style.left)>parseInt(bomba.style.left)-Number(100) && parseInt(listaHumanos[i].obtenerDiv().style.left)<parseInt(bomba.style.left)+Number(100)){
            listaHumanos[i].obtenerDiv().remove();
            listaHumanos[i]=null;
            listaHumanos.splice(i,1);
            aumentarPuntuacionUnMuerto();
            muertesEstaBomba++;
        }
    }
    tripleKillAndSo(muertesEstaBomba);
}



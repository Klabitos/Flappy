function bombaFuncionalidad(){
    generarBomba();
}

function generarBomba(){
    let bombaCreada = document.createElement("div");
    bombaCreada.classList.add("bomba");
    bombaCreada.style.position="absolute";
    bombaCreada.style.zIndex=3;
    bombaCreada.style.left=parseInt(window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left"))+Number(20)+"px";
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
    }, 50);
        
}

function explotar(bomba){
    let rect = pantalla.getBoundingClientRect();
    bomba.classList.replace("bomba","bomba_explosion")
    bomba.style.top=(parseInt(bomba.style.top)-Number(50)) + "px";
    humanoMuerto(bomba);
    setTimeout(() => {
        bomba.style.opacity="0.5";
    }, 500);
    setTimeout(() => {
        bomba.style.opacity="0";
        bomba.remove();
    }, 1000);
}

function humanoMuerto(bomba){
    comprobarSiMuerto(bomba);
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

function comprobarSiMuerto(bomba){
    for(let i=0; i<listaHumanos.length; i++){
        console.log(bomba.style.left);
        if(parseInt(listaHumanos[i].style.left)>parseInt(bomba.style.left)-Number(100) && parseInt(listaHumanos[i].style.left)<parseInt(bomba.style.left)+Number(100)){
            listaHumanos[i].remove();
            listaHumanos.splice(i,1);
            puntuacionUnMuerto();
        }
    }
}
function puntuacionUnMuerto(){
    let puntuacionSpan = document.getElementById("puntuacion");
    let puntuacionNumero = parseInt(puntuacionSpan.innerText);
    puntuacion.innerText=puntuacionNumero+Number(100);    
}
function bombaFuncionalidad(){
    generarBomba();
}

function generarBomba(){
    let bombaCreada = document.createElement("div");
    bombaCreada.classList.add("bomba");
    bombaCreada.style.position="absolute";
    bombaCreada.style.zIndex=3;
    bombaCreada.style.left=window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left");
    bombaCreada.style.top=window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top");
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
    setTimeout(() => {
        bomba.style.opacity="0.5";
    }, 500);
    setTimeout(() => {
        bomba.style.opacity="0";
        bomba.remove();
    }, 1000);
}
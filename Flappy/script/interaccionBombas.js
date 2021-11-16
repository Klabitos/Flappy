function bomba(){
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

function gravedad(elemento){
    let rect = pantalla.getBoundingClientRect();
    let intervalo;
    
    intervalo=setInterval(() => {
        elemento.style.top=(parseInt(elemento.style.top)+Number(10)) + "px";
        if((parseInt(elemento.style.top)>rect.bottom-27)){
            clearInterval(intervalo);
        }
    }, 50);
        
}
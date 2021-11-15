function bomba(){
    generarBomba();
}

function generarBomba(){
    let bombaCreada = document.createElement("div");
    bombaCreada.classList.add("bomba");
    bombaCreada.style.position="absolute";
    bombaCreada.style.zIndex=0;
    bombaCreada.style.left=window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("left");
    bombaCreada.style.top=window.getComputedStyle(cuadradoQueSeMueve, null).getPropertyValue("top");
    pantalla.appendChild(bombaCreada);
    gravedad(bombaCreada);
}

function gravedad(elemento){
    let rect = pantalla.getBoundingClientRect();
    let intervalo;
    
    intervalo=setInterval(() => {
        elemento.style.top=(parseInt(elemento.style.top)+Number(20)) + "px";
        if((parseInt(elemento.style.top)>600)){
            clearInterval(intervalo);
                
        }
    }, 300);
        
    
    
}
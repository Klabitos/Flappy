
var boton = document.getElementById("boton");
var inputColor = document.getElementById("inputColores");
var colorMuestra = document.getElementById("colorMuestra");
var todosDivs = document.getElementsByClassName("cuadrado");

function start(){
    var divCuadrados = document.getElementById("zonaCuadrados");
    var cuadrado;
    for(let i=0; i<7500; i++){
        cuadrado =document.createElement("div");
        cuadrado.classList.add("cuadrado");
        divCuadrados.appendChild(cuadrado);
    }
    establecerColorMuestraListener();
    addListenersEnLienzo();
}

function establecerColorMuestraListener(){
    colorMuestra.style.backgroundColor=inputColor.value; //Aparezca por primera vez con el color adecuado
    boton.addEventListener("click", () =>{
        console.log(inputColor.value);
        colorMuestra.style.backgroundColor=inputColor.value;
    });
}
function addListenersEnLienzo(){
    for(let i = 0; i< todosDivs.length; i++){
        todosDivs[i].addEventListener("mouseover", () =>{
        todosDivs[i].style.backgroundColor=colorMuestra.style.backgroundColor;  
        })
    }
}






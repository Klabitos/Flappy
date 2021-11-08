function start(){
    console.log(1)
    let tablero = document.getElementsByClassName("tablero")[0];
    let div;
    for(let i=0; i<9; i++){
        div = document.createElement("div");
        div.classList.add("casilla");
        tablero.appendChild(div);
    }
}
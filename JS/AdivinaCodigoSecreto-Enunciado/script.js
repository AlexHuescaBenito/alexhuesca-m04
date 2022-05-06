const codigo = [];
const maxIntento = 7;
let intentos = 0;

function actualizaIntentos(){
    if (intentos < maxIntento){
        document.getElementById("info").innerText = "Te quedan " + (maxIntento - intentos + " intentos");
    }
    else {
        document.getElementById("info").innerText = "Te queda " + maxIntento - intentos + " intento";
        if (intentos == maxIntento){
            document.getElementById("info").innerText = "Fin del juego. Has perdido bobo."
            document.getElementById("check").disabled = true;
        }
    }
    intentos++;
    
}

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor(Math.random() * 10);
    }
}

/*
2.Comprobar si el número introducido es correcto
*/
function Comprobar(){
    
    let codigoUser = document.getElementById("numero").value;
    let rows = document.getElementsByClassName("rowResult")
    let cells = rows[intentos].getElementsByClassName("celResult")
    for (i=0; i<codigo.length; i++){
        cells[i].innerText = codigoUser[i];
        if (codigoUser[i] == codigo[i]){
            cells[i].style.backgroundColor = "green";
        }
        else{
            for (j=0; j<5;j++){
                if(codigoUser[i]==codigo[j]){
                    cells[i].style.backgroundColor = "yellow";
                    break;
                }
                else{
                    cells[i].style.backgroundColor = "grey";
                }
            }
        }
    }
    actualizaIntentos()
}
codigoSecreto()

console.log(codigo)
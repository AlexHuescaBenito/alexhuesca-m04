const codigo = [];
const maxIntento = 8;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
}

codigoSecreto();

/*
2.Comprobar si el número introducido es correcto
*/
function Comprobar(){
    let codigoUser = document.getElementById("codigo");
    let row = document.getElementsByClassName("rowResult w100 flex wrap")
    let cell = row[1].getElementsByClassName("w20")
    for (let i = 0; i < row.length; i++){
        for (i = 0; i < cell.length; i++){
            if (cell[i]==codigoUser[i]){
                cell[i].style.color = "green";
            } 
        
        }
    }
}

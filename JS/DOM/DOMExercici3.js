/*
3.Crea un fitxer html complert amb diversos paràgrafs. i un botó. Crea un fitxer .js i
fes-lo enllaçar amb el fitxer html. Fes que en fer clic en el botó es modifiqui el color
de fons dels paràgrafs. Fes que els paràgrafs no tinguin id.
*/

function changeBackgroundColor(){
    const tag = document.getElementsByTagName("p");
    for (let i = 0; i < tag.length; i++){
        tag[i].style.backgroundColor = "red";
    }
}
/*
12.Agafa l’html d’exemple i modifica’l per a que les paraules resaltades modifiquin el
seu tamany i color quan el ratolí passi per sobre de l’enllaç definit per això.
*/
function resaltar(){
    let strong = document.getElementsByClassName("yes");
    for (i = 0; i < strong.length; i++) {
        strong.item(i).style.color = "red";
        strong.item(i).style.fontSize = "xx-large";
    }

}
function tornaNormal(){
    let strong = document.getElementsByClassName("yes");
    for (i = 0; i < strong.length; i++) {
        strong.item(i).style.color="black";
        strong.item(i).style.fontSize = "medium";
    }
}
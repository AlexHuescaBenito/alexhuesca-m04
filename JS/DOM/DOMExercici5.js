/*
5.Agafa el fitxer de base DOMExercici5.html. Crea un fitxer .js i fes-lo enllaçar amb el
fitxer html. Fes que el fitxer .js afegeixi una fila nova al principi de la taula.
*/
function insertarFila(){
 let table = document.getElementById("Taula");
 let row = table.insertRow(0)
 let cell1 = row.insertCell(0)
 let cell2 = row.insertCell(1)
 cell1.innerHTML= "Fila 0 cel·la 1"
 cell2.innerHTML = "Fila 0 cel·la 2"
}
/*
a. Repeteix l’exercici tot afegint la fila al final de la taula.
*/
function insertarFila(){
let table = document.getElementById("Taula");
let row = table.insertRow(2)
let cell1 = row.insertCell(0)
let cell2 = row.insertCell(1)
cell1.innerHTML= "Fila 3 cel·la 1"
cell2.innerHTML = "Fila 3 cel·la 2"
}
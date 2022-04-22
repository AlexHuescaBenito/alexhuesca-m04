/*
6.Modifica l’exercici anterior per a que el codi .js modifiqui el valor d’una cel·la de la
taula escollit arbitràriament.
a. En un primer pas fes que els valors de la fila i cel·la estiguin “hard-coded” en
el codi.
b. En un segon pas fes que els valors de la fila i cel·la es llegeixin des de
l’usuari via html. (Hauràs de modificar l’html).
*/
function insertarFila(){
    var table = document.getElementById("Taula");  
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);  
    //Column 1  
    var cell1 = row.insertCell(0);  
    cell1.innerHTML = "Fila-" + rowCount + " cel·la-" + 2; 
    //Column 2  
    var cell2 = row.insertCell(1);  
    cell2.innerHTML = "Fila-" + rowCount + " cel·la-" + 2;  
}  
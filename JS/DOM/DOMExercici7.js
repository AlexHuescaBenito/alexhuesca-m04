/*
7.Crea un .html i un .js en el qual es demani amb la comanda prompt (pots
reutilitzar-la) el número de files i columnes que ha de tenir una taula. Tot seguit
modifica una taula buida existent en l’html per a que tingui les fileres i columnes
demanades.
*/
function createTable(){
let rows = window.prompt("Input number of rows");
let cells = window.prompt("Input number of columns");
  
 for(var r=0;r<rows;r++)
  {
   var x=document.getElementById('Taula').insertRow(r);
   for(var c=0;c<cells;c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Fila-"+r+" cel·la-"+c; 
    }
   }
}
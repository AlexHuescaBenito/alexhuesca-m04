/*
2.Agafa el fitxer de base DOMExercici2.html. Crea un fitxer .js i fes-lo enllaçar amb el
fitxer html. Fes que el fitxer .js prengui els valors del “nom” i “cognom” i els mostri per
la consola del navegador.
*/
function prenValorForm(){
    let nom = document.getElementById("name").value;
    let cognom = document.getElementById("surname").value;
    document.write(nom+" "+cognom)
    console.log(nom+" "+cognom)
}   
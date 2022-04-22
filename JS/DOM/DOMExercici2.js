/*
2.Agafa el fitxer de base DOMExercici2.html. Crea un fitxer .js i fes-lo enllaçar amb el
fitxer html. Fes que el fitxer .js prengui els valors del “nom” i “cognom” i els mostri per
la consola del navegador.
*/
function prenValorForm(){
    let nom = document.getElementById("formulari1");
    for (i=0; i < 2; i++){
        console.log(nom.elements[i].value)
    }
}   
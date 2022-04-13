/*
4.Agafa el fitxer de base DOMExercici4.html. Crea un fitxer .js i fes-lo enllaçar amb el
fitxer html. Fes que el fitxer .js prengui els atributs definits en l’enllaç html i els mostri
per la consola del navegador.
*/
function obtenirAtributs(){
    const id = document.getElementById("itb");
    const attrValues = id.getAttributeNames().map(name => id.getAttribute(name));
    console.log(attrValues)

    const attrs =id.getAttributeNames().reduce((attribute, name) => {
        return {...attribute, [name]: id.getAttribute(name)};
      }, {});
    
    console.log(attrs)
}
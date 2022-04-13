/*
10.Crea un formulari que donat l’alçada d’un cilindre et retorni el seu volum. Cal prendre
el valor de l’usuari per html i mostrar al clicar el botó el resultat en l’html.
*/
function math() {
	let radius = document.getElementById("radius").value;
	let height = document.getElementById("height").value;
	let out = document.getElementById("out");
	out.value = Math.PI*radius*radius*height;
}
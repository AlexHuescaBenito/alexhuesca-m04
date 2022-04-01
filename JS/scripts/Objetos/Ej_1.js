/*
1.a Crea el objeto estudiante con las propiedades: nombre, curso y edad. 
Listar las propiedades del objeto.

*/

function listaPropiedades(obj) {
    var result = ``;
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += `${i} = ${obj[i]}\n`;
        }
    }
    return result;
 } 

var alumno = new Object();
alumno.nombre = "Alex"
alumno.curso = "DAMi"
alumno.sexo = "si"
console.log(listaPropiedades(alumno))

/*
1.b Elimina una propiedad al gusto y vuelve a listar las propiedades del objeto. 
*/
delete alumno.curso;
console.log(listaPropiedades(alumno))

/*
1.c Añade dos propiedades (fecha_nacimiento, apellidos) y vuelve a listarlo.
*/
alumno.fecha_nacimiento = "2001/02/28"
alumno.apellidos = "Huesca Benito"
console.log(listaPropiedades(alumno))

/*
1.d Sí la fecha es “correcta” (y,m,d) , añade la propiedad de edad → 
Crea la función que calcule dicha edad. [function calculaEdad (alumno){return alumno}]
*/
function calculaEdad(alumno){
    var currentDate = new Date();
    var birthDate = new Date(alumno.fecha_nacimiento);
    age = currentDate - birthDate
   return Math.floor(age/1000/60/60/24/365);
}

alumno.edad = calculaEdad(alumno)
console.log(listaPropiedades(alumno))

/*
2.Crea dos objetos estudiantes y comprueba que tengan las mismas propiedades. 
Modifica uno de ellos y vuelve a hacer la misma comprobación.
*/
estudiante_1 = new Object();
estudiante_1.name = "Alex"
estudiante_1.surname = "Huesca"
estudiante_1.years = "21"

estudiante_2 = new Object();
estudiante_2.name = "Mengmeng"
estudiante_2.surname = "Huang"
estudiante_2.years = "18"

function checkObjEqual(obj1,obj2){
    for(let property in obj1){
      if(!(property in obj2 )) return false;
    }
    return true;
}
console.log(checkObjEqual(estudiante_2,estudiante_1s))
estudiante_2.course = "DAMi"
console.log(estudiante_2)
console.log(checkObjEqual(estudiante_2,estudiante_1))

/*
3.Crea un objeto que te permita guardar…. Una receta? 
*/
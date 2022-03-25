/*
1.Obtén la fecha de hoy y sacala por pantalla.
*/
let currentDate = new Date()
document.write("La fecha actual es: "+currentDate)

/*
2.Según el día de la semana y la hora actual, informa por pantalla si estás o no en clase de M04.
*/
let currentDay = new Date().getDay
let m04DayOne = new Date("2022/02/14 22:20:22")
if (currentDate == m04DayOne.getDay && currentDay.getHours == m04DayOne.getHours){
    document.write("Estás en m04")
    return
}
    else{
        document.write("No estás en m04")
    }

/*
3.Desde hoy calcula cuánto tiempo falta para tu cumpleaños.
En segundos
En minutos
En horas
En días
*/

currentDate = new Date(2022, 02, 18);
birthdayDate = new Date(2023, 01, 28);
let daysToBirthday = birthdayDate.getTime() - A.getTime();
console.log(edadS);

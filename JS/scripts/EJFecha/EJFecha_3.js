let currentDate = new Date()
let birthdayDate = new Date("2023/02/28 10:10:00");
let secondsToBirthday = Math.round((birthdayDate - currentDate)/1000);
console.log ("seconds",secondsToBirthday)
let miutesToBirth = Math.round(secondsToBirthday/60);
console.log('minutes',miutesToBirth)
let hoursToBirth = Math.floor(secondsToBirthday/3600);
console.log('hours',hoursToBirth)
let daysToBirth = Math.floor(secondsToBirthday / (3600*24));
console.log('days',daysToBirth)
document.write ("El meu cumple és d'aqui ",secondsToBirthday," segons, ",miutesToBirth," minuts, ",hoursToBirth," hores i ",daysToBirth," dies");

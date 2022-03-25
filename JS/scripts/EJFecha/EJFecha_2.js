let now = new Date()
let currentDay = now.getDay()
let currentHour = now.getHours()
let currentMinutes = now.getMinutes()
if (currentDay == 1){
    if (currentHour >= 11 && currentMinutes >= 15 || currentHour <= 12 && currentMinutes == 10 ){
    document.write("Estás en m04")
}
    else{
        document.write("No estás en m04")
    }
}else{
    if (currentDay == 5){
        if (currentHour >= 8 && currentMinutes >= 00 || currentHour <= 09 && currentMinutes == 50 ){
            document.write("Estás en m04")
        }
            else{
        document.write("No estás en m04")
    }
    }
}
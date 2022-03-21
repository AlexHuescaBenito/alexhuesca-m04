function checkStringLength(string, number){
    if(number < string.length){
        return string.slice(0,number -1) + string.slice(number) 
    }
}
let inputValue = prompt("Introduce una palabra:")
let number = prompt("Introduce un número:")
console.log(checkStringLength(inputValue,number))
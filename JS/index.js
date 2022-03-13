function generateRandomArray(size, limit) {
    return Array.from({length: size}, () => Math.floor(Math.random() * limit));
}

function arrayEquals(firstArray, secondArray) {
    return Array.isArray(firstArray) &&
        Array.isArray(secondArray) &&
        firstArray.length === secondArray.length &&
        firstArray.every((val, index) => val === secondArray[index]);
}

function checkArrays(userArray, randomArray) {
    let okOrBad = new Array();
    for(let i = 0; i < randomArray.length; i++) {
        if(randomArray[i] == userArray[i]) {
            okOrBad.push('OK')
        } else {
            okOrBad.push('BAD')
        }
    }
    return okOrBad
}

function game(rounds, randomArray) {
    let round = 0
    console.log(randomArray);

    while (round < rounds) {
        let userArray = inputArray()
        console.log(userArray);
        round++;
        if (arrayEquals(userArray,randomArray)) {
            alert('you win!!!')
            return;
        } else {
            alert(checkArrays(userArray,randomArray))
            console.log(checkArrays(userArray,randomArray))
            alert('Attempt number:'+round)
        }
        
    }
    alert('you lose :(')
}

function inputArray (){
    let array = new Array()
    let firstNumber = array.push (+prompt ('Enter first number:'))
    let secondNumber = array.push (+prompt ('Enter second number:'))
    let thirdNumber = array.push (+prompt ('Enter third number:'))
    let fourthNumber = array.push (+prompt ('Enter fourth number:'))
    let fifthNumber = array.push (+prompt ('Enter fifth number:'))
    return array;
}

function main() {
    let randomArray = generateRandomArray(5,10)
    let rounds = 4
    game(rounds,randomArray)
}

main();
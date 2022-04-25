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

/*
function generaCodigo() {
    //Version corta
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10 + 1));
    
}
function contarNumero(codigo, numero) {
    let total = 0;
    for (let i = 0; i < 5; i++) {
        if (numero == codigo[i]) {
            total++;
        }
    }
    return total;
}

function estaEnPos(codigo, num, pos) {
    let exist = false;
    if (codigo[pos] == num) {
        exist = true;
    }
    return exist;

}

function busca(codigo, codigoUser) {
    let sol = [5];
    let conterMAtch = 0;
    for (let i = 0; i < codigo.length; i++) {
        conterMAtch = contarNumero(codigo, codigoUser[i]);
        sol[i] = conterMAtch;
        if (conterMAtch > 0) {
            if (estaEnPos(codigo, codigoUser[i], i)) {
                sol[i] = "ok"
            }
        }

    }
    return sol;
}

function hasAcertado(sol) {
    for (i = 0; i < sol.length; i++) {
        if (sol[i] != "ok") {
            return false;
        }
    }
    return true;
}
function main() {
    let codigo = generaCodigo();

    //let veces = contarNumero(codigo, numero);

    //console.log(codigo, veces);
    //console.log(codigo);

    let oportinities = 4;
    while (oportinities != 0) {
        let codigoUser = [];

        for (let i = 0; i < 5; i++) {
            codigoUser[i] = prompt("Dame un número de 1 a 10");
        }

        console.log("Codigo USer: ", codigoUser);

        let sol = busca(codigo, codigoUser);
        console.log("Result", sol);

        if (hasAcertado(sol) == true) {
            console.log("Eres un crack");
            oportinities = 0;
        } else {
            console.log("Has fallado");
            oportinities--;
        }

    }

    let esta= estaEnPos(num, pos);
    console.log(esta);



}

main();
*/
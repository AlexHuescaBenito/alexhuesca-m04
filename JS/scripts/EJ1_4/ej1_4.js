for (
    let i = 0;
    i <= 10000;
    i++
){
    let digits = i.toString().split('').map(Number);
    let totalcube = 0
    for (let int of digits) {
        totalcube += int * int * int 
    }

    if(i == totalcube){
        console.log(i)
    }

}
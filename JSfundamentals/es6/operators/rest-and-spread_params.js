function sumNum(...operan){
    let retSum = operan.reduce(function(ac, value, indexx, array){
        return ac = ac + value;
    });

    console.log('Result sum: ' , retSum);
    
}

let numbers = [2,3,6,5,8];

sumNum(...numbers);
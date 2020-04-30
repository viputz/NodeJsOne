
function showNumbers(a,b,c,d){
    console.log("numbers: ", a,b,c,d);
    
}

const arrayNumbers = [1,2,3,4,5,6,7,8,9];


showNumbers(arrayNumbers[0], arrayNumbers[1], arrayNumbers[2], arrayNumbers[3]);
showNumbers.apply(null, arrayNumbers);


//with spread so simple
showNumbers(...arrayNumbers);


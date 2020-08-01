var inputs = document.getElementsByTagName('input');

console.log('typeof input', typeof inputs);
console.log('typeof input', Object.prototype.toString.call(inputs));


//this function foreach doesn't exist for array like

// inputs.forEach(function(valor, element){
//     console.log();

// });

Array.prototype.forEach.call(inputs, function (valor, element) {
    console.log('Element', valor);
});

//array-like

function sumValues(a, b) {
    return a + b;
}

console.log('sumValues(5 + 5)', sumValues(5, 5));

function sumValues2(a, b) {
    let tot = Array.prototype.reduce.call(arguments, function(returmValue, v, index){
        return v + returmValue;
    });

    return tot;
}


console.log("sumValues2(5,5,20,30)", sumValues2(5,5,20,30));

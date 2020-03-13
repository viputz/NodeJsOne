
var msg = function(){"Hello World!!"};


function sum(a, b){ return a + b};
function sub(a, b){ return a - b};

function calc(fn, v1, v2) {
    ///rules

    return fn(v1, v2)
};


console.log("result of calc with sun:", calc(sum, 40, 40));
console.log("result of calc with subtration:", calc(sub, 20, 40));

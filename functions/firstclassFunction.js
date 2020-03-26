
var msg = function(){"Hello World!!"};


function sum(a, b){ return a + b};
function sub(a, b){ return a - b};

function calc(fn, v1, v2) {
    ///rules

    return fn(v1, v2)
};


console.log("result of calc with sum:", calc(sum, 40, 40));
console.log("result of calc with subtration:", calc(sub, 20, 40));

//return a function as value to a caller of other function

function calc2(op){
    if (op == 'sum') {
        return sum;
    } else if (condition) {
        return sub;
    } else {       
        return 'Invalid operation.';
    }
}

var operationReturn = calc2('sum');
console.log('operationReturn', operationReturn);
console.log('operationReturn op', operationReturn(10,54));


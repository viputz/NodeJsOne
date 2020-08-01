function getDate() {
    return new Date().toLocaleDateString('pt-Br');
}
console.log(getDate());

///function expression
var squared = function(number){return number * number};

console.log(squared(4));


///euto exec function
var mult = function(){return 3 * 3}();

//in var mult has result of expresion function(){return 3 * 3}()
console.log(mult);

//object method
var objectMethod = {qdt: 2, price: 5, sum(){return this.price * this.price}};

console.log(objectMethod);
console.log(objectMethod.sum());


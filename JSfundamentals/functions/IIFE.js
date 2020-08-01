//IIFE immediately-invoked function expression
(function() {
})();

var test = true;

console.log('test', test);

(function(){
    test = false;
    var local = true;
    console.log('test', test);
    console.log('local', local);
})();

console.log('test', test);
//console.log('local', local);

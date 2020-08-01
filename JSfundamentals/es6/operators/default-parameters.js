
function showGreetings(name) {
    let msg = "Hello " + name + ", wellcome!";
    console.log(msg);
    
}

showGreetings("John");
// No parameter show undefined
showGreetings();

console.log("----------------------ES5");


function showGreetingsES5(name) {
    name = name || 'Customer';

    let msg = "Hello " + name + ", wellcome!";
    console.log(msg);
}

showGreetingsES5("Joseph");
// No parameter show undefined
showGreetingsES5();


console.log("----------------------ES6");


function showGreetingsES6(name = 'Customer') {

    let msg = "Hello " + name + ", wellcome!";
    console.log(msg);
}

showGreetingsES6("Paul");
// No parameter show undefined
showGreetingsES6();


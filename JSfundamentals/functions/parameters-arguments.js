





//More arguments and less parameters
function nameToUpperCase(name, middle, last) {
    last = last || "";//test here
    let fullName = String.prototype.concat.call(name," ",middle," ",last);
    return fullName.toUpperCase();
}

console.log("call function nameToUpperCase()", nameToUpperCase("Joao", "silva"));


//More parameters and less arguments
function nameToUpperCase2(name, middle, last) {
    let fullName = '';
    //let fullName = String.prototype.concat.call(name," ",middle," ",last);
    for (const key in arguments) {
        fullName += ' ' + arguments[key];
    }
    return fullName.toUpperCase();
}

console.log("call function nameToUpperCase2(.....)", nameToUpperCase2("Joao", "silva", "cordeiro", "mendes"));


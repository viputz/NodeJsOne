//map funcion
// let number = [1, 4, 6, 8, 10, 15];

// console.log("Array default",number);

// var double = number.map(function(value, index, array){

//     console.log("values", value + "index:" + index + " Array:" +array);
//     return value * 2; 
// });
// console.log("Array double",double);


//Filter
let names = ["vinicius", "aline", "meg", "Alice", "Leonel", "Nivaldo", "Maria"];
let numbers = [1, 4, 6, 8, 10, 15];

console.log('numbers', numbers);

let newNumbers = numbers.filter((v, i, a) => {

    return v > 10;
});

console.log("result", newNumbers);

//Searching
console.log('names:', names);

let regExp = new RegExp("A","ig",);

let resultNames = names.filter((v) => {
    return regExp.test(v);
});

console.log("get all names the contains 'A' or 'a': ",resultNames);

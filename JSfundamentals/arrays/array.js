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
// let numbers = [1, 4, 6, 8, 10, 15];

// console.log('numbers', numbers);

// let newNumbers = numbers.filter((v, i, a) => {

//     return v > 10;
// });

// console.log("result", newNumbers);

// //Searching
// console.log('names:', names);

// let regExp = new RegExp("A","ig",);

// let resultNames = names.filter((v) => {
//     return regExp.test(v);
// });

// console.log("get all names the contains 'A' or 'a': ",resultNames);


// console.log("Every ------------------------------");

let numbers = [1, 2, 3, 4, 5, 6];

// console.log("Array numbers: ", numbers);

// let resultEvery = numbers.every((v, i, array) => {
//     return v < 10;
// });

// console.log("result every value less than 6",resultEvery);

// console.log("Some ------------------------------");
// let resultSome = numbers.some((v,i, array) => {
//     return v < 4;
// });

// console.log("result Some value less than 6",resultSome);


// console.log("Reduce ------------------------------");
// console.log(numbers);

// let resultReduce = numbers.reduce((old, v, i, array) => {
//     console.log("old", old);
//     console.log("v", v);
//     console.log("i", i); 
//     console.log("> ------------------------------")
//     return v + old;
// },0);
// console.log("result reduce", resultReduce);


console.log("IndexOf and lastIndexOf ------------------------------");
console.log("arrays", names);

let resultIndexOf = names.indexOf('Maria');
console.log("index of Maria",resultIndexOf);
console.log(names[resultIndexOf]);


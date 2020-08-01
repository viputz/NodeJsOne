// //create Objects

// //for Constructor
// var objPerson02 = new Object();
// objPerson02.name = 'Aline';
// console.log(objPerson02.name);


// //Object.create create with prototype
// var objPerson03 = Object.create(Object.prototype);
// objPerson03.name = 'Alice';
// console.log(objPerson03.name);


// //Constructions Functions
// var obj1 = new Object();
// var obj2 = new Array(1, 2, 3, 4);
// var obj3 = new Date();//sysdate now
// var obj4 = new Error("Throw msg error");
// var obj5 = new RegExp(/Test/);
// var obj6 = new Function("parameterName", "return 'Hello World! ' + parameterName + '!'");
// console.log(obj6("Meg"));

// //Create object literal
// var objPerson = {
//     name: 'Vinicius',
//     birthDate: new Date(1987, 11, 25),
//     cpf: 35701874893,
//     isActive: true,
//     "test prop": "teste",
//     contacts: [123456978, 987654321, 123789654],
//     address: {
//         logradouro: "Av A",
//         number: 55,
//         cep: 36521789,
//     },
//     greetings: function () {
//         return "Hello my name is " + this.name + "!";
//     }
// }

//Create object literal
// var objPerson =  new Object({
//     name: 'Vinicius',
//     birthDate: new Date(1987, 11, 25),
//     cpf: 35701874893,
//     isActive: true,
//     "test prop": "teste",
//     contacts: [123456978, 987654321, 123789654],
//     address: {
//         logradouro: "Av A",
//         number: 55,
//         cep: 36521789,
//     },
//     greetings: function () {
//         return "Hello my name is " + this.name + "!";
//     }
// });

// console.log(objPerson);

// //access properties
// console.log("name", objPerson.name);
// console.log("cpf", objPerson.cpf);
// console.log("Date of birth", objPerson.birthDate);
// console.log("isActive", objPerson.isActive);
// console.log("Test", objPerson["test prop"]);
// console.log("contact", objPerson.contacts[0]);

// for (var contact of objPerson.contacts) {
//     console.log(contact);

// }
// for (var key in objPerson.address) {
//     console.log(key, objPerson.address[key]);    
// }

// console.log(objPerson.greetings());


// //reference object
// var obj1 = {age: 32};
// console.log("obj1:", obj1.age);

// var obj2 = obj1;
// console.log("obj2:", obj2.age);

// obj2.age = 18;

// console.log("obj1:", obj1.age);
// console.log("obj2:", obj2.age);

// obj2 = null //clean memory
// console.log("type object:", typeof obj1);
// console.log("instanceof object:", obj1 instanceof Object);

// console.log("hasOwnProperty", objPerson.hasOwnProperty("name"));

// console.log("hasOwnProperty", objPerson.hasOwnProperty("Idade"));

// console.log(Object);

// var entries = Object.entries(objPerson)
// var entriesChield = Object.entries(objPerson.address)
// var values = Object.values(objPerson)
// var keys = Object.keys(objPerson)
// console.log(entries);
// console.log(keys);
// console.log(values);
// console.log(entriesChield);



//get set with JS
// var payments = {
//     _total: 0, //private

//     set total(valor) {
//         this._total = valor;
//     },

//     get total() {
//         return this._total;
//     }
// };

// payments.total = 25524.69;
// console.log(payments.total);

// console.log("Attributes of properties from object ", Object.getOwnPropertyDescriptor(payments, "total"));

// var objTest = { a: 1, b: 2, c: 3 };
// console.log("a in objTest", "a" in objTest);
// console.log("check if is Enumerable", objTest.propertyIsEnumerable("a"));
// console.log("check if is Enumerable", objTest.propertyIsEnumerable("toString"));
// console.log("check if is Enumerable", objTest.propertyIsEnumerable("toString"));
// console.log("check if is Enumerable", objTest.propertyIsEnumerable("length"));

// console.log(objTest);
// for(var [k,v] of Object.entries(objTest)){
//     console.log(k, v);    
// }

// Object.defineProperty(objTest, "a", {
//     enumerable: false,
//     configurable: false
// })
// console.log("-------------------------");

// for(var [k,v] of Object.entries(objTest)){
//     console.log(k, v);    
// }

// console.log("try delete a when be configurable false:", delete objTest.a);


// objTest.b = 10;
// console.log(objTest.b);

// // this block write on variable
// Object.defineProperty(objTest, "b", {
//     writable: false
// });

// objTest.b = 20;
// console.log(objTest.b);


// Object.defineProperty(objTest, "c", {
//     value: 30
// });

// console.log(objTest.c);





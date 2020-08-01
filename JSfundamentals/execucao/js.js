//Funcional
function HelloWorld() {
    console.log("Wellcome Meg, say Hello World!!");
}

console.log("Calling functtion");
HelloWorld();

//POO

var me = {
    name: "Vinicius Mendes Coutinho",
    age: 32,
    toDeveloper: function() {
        console.log("Start develop");
    }
};

console.log("me Object");
console.log(me);

console.log("access properties from object");
console.log(me.name);
console.log(me.age);

console.log("Doing me to develop");
me.toDeveloper();

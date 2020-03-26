var person = 'Meg';

console.log(person);


function company() {
    var employ = 'Aline';
    console.log('Global - ', person);
    console.log('inside function -', employ);

};


console.log('Global - ', person);
company();
console.log('inside function - ', employ);


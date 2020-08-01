var countGlobal = 0;

console.log(countGlobal);

function increment() {
    var localCount = 0;
    ++localCount;
    ++countGlobal;


    console.log('local', localCount);

}

increment();
increment();
increment();
//console.log(localCount);
console.log(countGlobal);

//2
console.log('-------------------------');

var count;

function inc2() {
    var localCount = 0;

    function load() {
        ++localCount;
        console.log('local', localCount);

    }

    count = load;
}

inc2();
count();
count();
count();



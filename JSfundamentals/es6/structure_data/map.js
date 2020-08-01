

var name = 'Joao',
    numberr = 24.3,
    bool = true,
    alfabArray = ['a', 'b', 'c'],
    funct = function () { console.log('My function') },
    objectt = { customer: 'customer' },
    regExp = /test/gi;


const map = new Map();

map.set('key', 'value');
map.set(name, numberr);
map.set(bool, alfabArray);
map.set(funct, funct);
map.set(objectt, objectt);


let retMap = map.set(regExp, regExp);

console.log('retMap: ' , 'type: ' + Object.prototype.toString.call(retMap),
retMap);

retMap.set('123', 'test');

console.log('map == retMap',map == retMap);

console.log(map);

console.log('---------------------------------------------------------');

let element1 = map.get(name);
let element2 = map.get(funct);
let element3 = map.get(bool);
let element4 = map.get(regExp);
let element5 = map.get('key');

console.log('element1', typeof element1, element1);
console.log('element2', typeof element2, element2);
console.log('element3', typeof element3, element3);
console.log('element4', typeof element4, element4);
console.log('element5', typeof element5, element5);
console.log('element6', map.get('exists not'));

console.log('------------------------------------------------------------');

map.forEach(function(value, key, map){
    console.log('key:', key, 'value: ', value);
    
});

console.log('------------------------------------------------------------');

let retMapDel = map.delete(regExp);

console.log('retMapDel', retMapDel);
console.log('map.delete(name): ', map.delete(name));
console.log('map.delete(666): ', map.delete(666));

console.log('------------------------------------------------------------');

console.log('map.has(funct): ', map.has(funct));
console.log('map.has(meg): ', map.has('meg'));

map.set('meg', 'meg');

console.log('------------------------------------------------------------');
console.log('map.has(meg): ', map.has('meg'));
console.log(map);


console.log('>>>>> keys <<<<<',);

let keys = map.keys();

console.log('keys', typeof keys, keys);
console.log('keys.next()', keys.next());
console.log('keys.next().value', keys.next().value);
console.log(keys.next().done);

while(!keys.next().done){
    console.log('keys');
        
}

let values = map.values();

while(!values.next().done){
    console.log(values.next().value);
    
}

let entries = map.entries()


while(!entries.next().done){
    console.log(entries.next().value);
    
}

console.log('map.clear()',map.clear());
console.log('size', map.size);


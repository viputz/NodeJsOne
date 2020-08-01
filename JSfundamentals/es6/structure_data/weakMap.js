

const weakMap = new WeakMap();

let obj1 = {t1: 't1'};
let obj2 = {t2: 't2'};
let obj3 = {t3: 't3'};
let obj4 = {t4: 't4'};


weakMap.set(obj1, obj1);
weakMap.set(obj2, 'test');
weakMap.set(obj3, true);
weakMap.set(obj4, ['a', 3, true]);

console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));
console.log(weakMap.get(obj3));
console.log(weakMap.get(obj4));

obj1 = null;

console.log(weakMap.get(obj1));
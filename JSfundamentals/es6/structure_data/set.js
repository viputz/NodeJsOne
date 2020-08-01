//const set = new Set();

const set = new Set([1,2,3,4]);

set.add(true);
set.add('string');
set.add([1,2,3]);
set.add({test: 'test'});
set.add(new Map().set('teste', 'teste'));

console.log('set.add(false): ', set.add(false));

console.log('size', set.size);
console.log('set.delete(2);', set.delete(2));
console.log('set.delete(100);', set.delete(100));
console.log('size', set.size);

set.add(true);

console.log('size', set.size);




function sum(a, b) {
    return a+ b;
}

console.log('result: ', sum(5,9));

//functio express
let sumExpress = function(a, b){
    return a+b;
}
console.log(sumExpress);
console.log('result of sumExpress:', sumExpress(3,3));


let  sumArrow1 = (a, b) => {
    return a+b;
}

console.log('result arrow1;', sumArrow1(6,6));


let  sumArrow2 = (a, b) => a + b;

console.log('result arrow2;', sumArrow2(20,20));

let Arrow3 = name => name.toUpperCase();

console.log(Arrow3('Peter'));


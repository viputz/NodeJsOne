

let buttonHtml = document.getElementById('create-html');

buttonHtml.addEventListener('click', function () {
    console.log('this is my this html: ', this);

}, false);



/* let buttonHtml = document.getElementById('create-html');

buttonHtml.addEventListener('click', function () {
    console.log('this is my this: ', this);

}.bind(this), false); */


let buttonBoot = document.getElementById('create-boot');

buttonBoot.addEventListener('click', () => {
    console.log('this is my this boot: ', this);
}, false);


function Person() {
    this.name;

    this.registerEventHtmlExFunc = function () {
        let buttonHtmlObj = document.getElementById('create-html-object');
        buttonHtmlObj.addEventListener('click', function () {
            console.log('this is my this create-html-object: ', this);

        }, false);
    }

    this.registerEventBootArrow = function () {
        let buttonBootObj = document.getElementById('create-boot-object');
        buttonBootObj.addEventListener('click', () => console.log('this is my this create-boot-object: ', this), false);
    }
}

let person = new Person();
person.registerEventBootArrow();
person.registerEventHtmlExFunc();
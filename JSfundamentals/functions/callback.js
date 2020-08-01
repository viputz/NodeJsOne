function showCustomer(name) {
    console.log('Customer', name);
    
}


function goSell(callback) {
    
    callback('Meg');
    console.log('1 - A');
    console.log('1 - B');
    console.log('1 - C');
    console.log('Total X');
    
}


goSell(showCustomer);

//sync
function count(){
    var num = 100;
    for(var i = 0; i < num; i++){
        console.log(i);
        
    }
}

function start(callback){
    console.log('begin');
    callback();
    console.log('end');
}

//start(count);



//Async
function ad(time){
    setTimeout(() => {
        console.log('AD AD ad >>>>>>>');
        
    }, time);
}

function start(callback){
    console.log('begin');
    callback(5000);
    console.log('Working!!!');
}

start(ad);
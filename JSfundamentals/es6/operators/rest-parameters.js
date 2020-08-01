

function showFullName() {
    console.log('Qte names:', arguments.length);
    let fullName = '';
    Array.prototype.forEach.call(arguments, function (valor) {
        fullName += " " + valor;
    })

    console.log(fullName);
    
}

showFullName('Meg', 'Alice', 'Aline');


function showFullNameRestP(...names) {
    console.log('Rest Parameter -> Qte names:', names.length);
    let fullName = '';
    names.forEach(function (valor) {
        fullName += " " + valor;
    })

    console.log(fullName);
    
}

showFullNameRestP('Meg', 'Alice', 'Aline');



// Написать функцию, которая создает пустой объект, но без прототипа.

function createsObj(){
    let emptyObj = Object.create(null)
    return emptyObj;
}

console.log(createsObj());
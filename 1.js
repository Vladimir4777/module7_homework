/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */


let obj = {name: 'John', surn: 'Smith', proff: 'Teacher'}
function showKeysValue (obj){
  for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
  }
}

showKeysValue (obj);
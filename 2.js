/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/


let str = 'name';
let obj = {name: "John",surn: "Smith"};
function cheksName(str, obj){
  return str in obj;
  
}

console.log(cheksName(str, obj));
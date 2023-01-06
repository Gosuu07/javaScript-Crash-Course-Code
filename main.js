//Object Literal
// const person ={
//     name : "John",
//     lName : "Doe",
//     age : 44,
//     hobbies : ['music', 'sports', 'gym'],

//     address : {
//         street : 'n-2',
//         city : 'Abad'
//     }
// }

// console.log(person);
// console.log(person.hobbies[1]);
// console.log('hello');

// const { name , age , address :{city}} = person;



// console.log(person);
// console.log(name);
// console.log(age);
// console.log(city);

// Array of Objects
// const todos = [
//     {
//         id : 2,
//         text : 'Take out Trash',
//         isCompleted : true
//     },

//     {
//         id : 3,
//         text : 'Meeting with boss',
//         isCompleted : true
//     },
    
//     {
//         id : 4,
//         text : 'dentist appn',
//         isCompleted : false
//     },
// ];

// console.log(todos[1].text);

// High Order Array Method
// forEach           map            filter...
// part of functional programming in JS

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~```````````````````````````````````~~~~~~~~~~~~~~~~
// Arrow functions 
// part of functional programming in JS
// todos.forEach(todo => console.log(todo.text));

//`````````````````````````````````~~~~~~~~~~~~~~~~~~~~~``````````````````````````~~~~~~~~~~~~~~~~~~

// OOP

//`````````````````````````````````~~~~~~~~~~~~~~````````````````````````````

// Constructor function
// function Person(name, age , doB){

//     this.name = name,
//     this.age = age,
//     this.doB = new Date(doB)


//     //addding a method to a object
//     this.getFullName = function(){
//         return `${name} + ${age}`;
//     }
// }

// //adding a method using prototype... helps hiding data
// Person.prototype.getBirthYear = function(){
//     return this.doB.getFullYear();
// }



//Instantiate Object
// const person1 = new Person("John",33,"1-11-1998");

// console.log(person1);
// console.log(`Name + age = ${person1.getFullName()}`);
// console.log(person1.getBirthYear());

// Object literal & prototype method were the only ways to OOP until ES5.
//ES6 (ES2015) brought class declaration

//CLASS
// class Person{
//     constructor(name,age,doB){
//         this.name = name;
//         this.age = age;
//         this.doB = new Date(doB);
//     }

//     getFullName(){
//         return `name + age = ${this.name} `;
//     }
// }

// //instantiate obj
// const p1 = new Person("Rajes",21,'12-2-2012');

// console.log(p1.getFullName());




//`````````````````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``````````````````````````

//~~~~~~~~~~~~~~~~~~~~~~DOM ````````````````````````````~~~~~~~~~~~~
// document.querySelector('h1');
// const form = document.getElementById('my-form');
// // const formId = form;
// const mail = document.querySelector('#email');

// const Name = document.getElementById('name');
// console.log(form);
// // console.log(formId);
// console.log(mail);
// console.log(Name);
//const items =document.querySelectorAll('.item');

// items.forEach((item) => {
//     console.log(item);
// });

const ult = document.querySelector(".items");

// ult.remove();                                // removes all list

ult

console.log(ult);




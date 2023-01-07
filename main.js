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



// DOM - PLAYING WITH HTML 
// document.querySelector('h1');                        // single element selector

// query selector is used to select CSS selectors, these include .class, #id , <tag>
// because this is a seingle element selector.. the first elmenet to match the arg will be considered. 

// const form = document.getElementById('my-form');         
 // const formId = form;
// const mail = document.querySelector('#email');

// const Name = document.getElementById('name');
// console.log(form);
 // console.log(formId);
// console.log(mail);
// console.log(Name);


// HOW TO LOOP THROUGH MULTIPLE ELEMENTS
//const items =document.querySelectorAll('.item');          // multiple element query selector

// items.forEach((item) => {
//     console.log(item);
// });

// const ult = document.querySelector(".items");

// ult.remove();                                // removes all list

//ult.lastElementChild.remove();      // last elemnet child is removed

// ult.firstElementChild.textContent = "Hello";    //changed the text content of the first element
// ult.children[1].innerHTML = "GigaChad";         //children is the array of child elements

// ult.lastElementChild.innerHTML = '<h1>Voila!</h1>'; // make changes to html from :JS:
//console.log(ult);


// DOM - PLAYING WITH CSS
// We can use the dom to style our css.

// const btn1 = document.querySelector('.btn');            // stored the element in btn1

// btn1.style.background = "red";                  // made the changes and now the submit button looks red

// This way you can make changes to the UI dynamically(using JS) and apply differennt effects 
//like size and different events, etc..


//````````````````````````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`````````````````````````````
// EVENTS --- DOM MANIPULATION 

// # Adding a Event Listener

// STEP1 :- SELECTING THE ELEMENT FROM THE DOCUMENT OBJECT
// const element = document.querySelector('h1'); 

// STEP2 :-  CALL THE addEventListener method
// element.addEventListener(
//     'click' , (eventVariable) =>   {                      // takes 2 args.( eventYouWillPerform , variableToAddressThisEvent) passed to a arrow func 
//     eventVariable.preventDefault();                     // this is done to undo some preset default actions.
  
//     console.log("print Data to console.. on click");    // Action you want to execute after the Event is performed
//     }
// );


// example of the submit button changing color depending on the number of click being even(red) or odd(grey)
// const btn = document.querySelector('.btn');
// let count =0;
// btn.addEventListener('click', (event) => {
//     count++;
//     event.preventDefault();
//     if(count % 2 == 0){
//         btn.style.background = "red";
//     }else{
//         btn.style.background = "grey";
//     }
//     console.log(`click : ${count}`);
// });



//example of mousehover over ADD USERS changes its tag(thus changing its size)
// const addUserB = document.querySelector(".addUser");

// addUserB.addEventListener(
//     'mouseover',(eventV) => {
//         // eventV.preventDefault();
//         addUserB.innerHTML = `<h3> Resu Dda</h3>`
//         console.log("Changed");
//     }
// );


// example.. take the input of name and email and then display it below
// new methods used.. document.createTextNode()    // create node for li
//     document.createElement()         // create html element in js(pass the tags as a arg)
// setTimeout(actionFucntion , timeinMiliseconds)       // wait after the event is performed to execute actionFunc
//  .value             // pull out the value of that element

const form = document.querySelector('#my-form');
const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#email");
const msg = document.querySelector('.msg');
const userList = document.querySelector("#users");

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || mailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = "Please fill all details";

        setTimeout(() => msg.remove(),3000);
    } else{
        const Li = document.createElement('li');

        Li.appendChild(document.createTextNode(` ${nameInput.value} :: ${mailInput.value} ;`));

        userList.appendChild(Li);

        //clear the fields
        nameInput.value = '';
        mailInput.value = '';
    }
}
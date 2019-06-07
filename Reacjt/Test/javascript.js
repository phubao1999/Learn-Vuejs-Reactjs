// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'soccer', 'movie'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.email = 'phutuongbao1999@gmail.com'
// console.log(person);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const todos = [
//     {
//         id: 1,
//         text: 'Take Out Trash',
//         isCompleted: false
//     },
//     {
//         id: 2,
//         text: 'Meeting with Boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos[0].text);

// const todosJOSN = JSON.stringify(todos);
// console.log(todosJOSN);

// for(let i=0; i<=10; i++){
//     console.log(`For Loop Number: ${i}`)
// }
// let i = 0;
// while(i<=10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }
// Sử Dụng for để in dữ liệu thừ obj
// const todos = [
//     {
//         id: 1,
//         text: 'Take Out Trash',
//         isCompleted: false
//     },
//     {
//         id: 2,
//         text: 'Meeting with Boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// for(let i = 0; i<todos.length; i++){
//     console.log(todos[i]);
// }   // Sử dụng Loop normal

// for(let todo of todos){
//     console.log(todo.text);
// }

// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// })

// console.log(todotext);

// const todoIsCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoIsCompleted);
// Switch case
// const x = 11;
// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red': console.log('color is red')
//         break;
//     case 'blue': console.log('color is blue')
//         break;
//     default: console.log('color is NOT blue or red')
//         break;
// }

//Function
// const addNums = (num1 = 1, num2 = 2) => num1 + num2;
// console.log(addNums(4,5));

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function (){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

//Class
// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Tuong', 'Bao', 27-08-1999);
// const person2 = new Person('Hien', 'Luong', 25-06-1999);

// console.log(person1);
// console.log(person2.getFullName());
//DOM
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello Word!!!'
// ul.children[1].innerText = 'Yasou'
// ul.lastElementChild.innerHTML = '<h1>Hasagi</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';
// btn.style.color = 'white'
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.toggle('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h2>Hello Word!!!</h2>'
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);
        // Clear Field
        nameInput.value = '';
        emailInput.value = '';
    }

}
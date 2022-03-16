// console.log("a");
// console.log("hello");
// console.log("hello");

//varibles

/*
let baba = 8;
let naber ="wowow";
let boool= true;

console.log(baba);
console.log(naber);
console.log(boool);


document.getElementById("p1").innerHTML = "your age is " + baba;
document.getElementById("p2").innerHTML = "youe say" + naber;
document.getElementById("p3").innerHTML = "Get the job :" + boool;
*/

//sayi

/*
let student = 20;

student=+1;
console.log(student);
*/

//user input

/*
let username = window.prompt("what is your name ?? ananin ami");
console.log(username);

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = username;    
}
*/


//type
/*
let userAge = window.prompt("age?? ");

age = Number(userAge);

console.log(age);

Boolean
String

console.log(age,typeof age);

*/

//Math

// let a;
// let b;
// let c;

// a = window.prompt("Enter A");
// a = Number(a);

// b = window.prompt("Enter B");
// b = Number(b);



// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log(c);

// document.getElementById("submit").onclick= function(){
// let a;
// let b;
// let c;

// a = document.getElementById("aTextBox").value;
// a = Number(a);

// b = document.getElementById("bTextBox").value;
// b = Number(b);



// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// document.getElementById("cLabel").innerHTML = "C: " + c;
// }


//inc dec 

// let  count = 0;

// document.getElementById("decB").onclick =function(){
//     count -=1;
//     document.getElementById("count").innerHTML= count;
// }

// document.getElementById("resetB").onclick =function(){
//     count = 0;
//     document.getElementById("count").innerHTML= count;
// }

// document.getElementById("incB").onclick =function(){
//     count +=1;
//     document.getElementById("count").innerHTML= count;
// }

// roll dice random

// let x;
// let y;
// let z;

// document.getElementById("roll").onclick= function(){
//     x = Math.floor(Math.random() *6 +1);
//     y = Math.floor(Math.random() *12 +1);
//     z = Math.floor(Math.random() *20 +1);

//     document.getElementById("6dice").innerHTML = "6 sided dice rolled :" + x;
//     document.getElementById("12dice").innerHTML = "12 sided dice rolled :" + y;
//     document.getElementById("20dice").innerHTML = "20 sided dice rolled :" + z;

// }

//** 
// let username = "-wow-";

// console.log(username.length);
// console.log(username.charAt(2));
// console.log(username.indexOf("w"));
// console.log(username.lastIndexOf("w"));
// username = username.trim();
// username = username.toUpperCase();
// console.log(username);

// username = username.replaceAll("-","");
// console.log(username);

// **slice
// let fullname = "ananin ami" ;
// let firstname;
// let lastname;
// // firstname = fullname.slice(0,6);
// // lastname = fullname.slice(6);

// lastname = fullname.slice(fullname.lastIndexOf(" "));
// lastname =lastname.trim();
// firstname = fullname.slice(0,fullname.indexOf(" "));
// console.log(lastname);
// console.log(firstname);


/*__ */

// let username= "broo";

// username = username.charAt(0).toUpperCase();
// console.log(username);


/* if statment */

// let a = 11;

// if (a==21) {
//     console.log("you stupid");
// }else if(a>12) {
//     console.log("you bitch");
// }else{
//     console.log("fuck you kid")
// }

// let b = false;

// if (b) {
//     console.log("hello");
// } else {
//     console.log("what do you meen no");
// }

/*check */
// document.getElementById("submit").onclick = function(){
//     const check= document.getElementById("checkboxx").checked;
    
//     if (check) {
//         console.log("thanks asshole");
//     } else {
//         console.log("fuckyou bitch");
//     }
// }

// document.getElementById("pay").onclick = function(){
//     const checkvisa = document.getElementById("visa");
//     const checkmaster = document.getElementById("mastercard");
//     if (checkvisa.checked) {
//         console.log("visaaaa");
//     } else if (checkmaster.checked) {
//         console.log("masterrrrr");
//     }else{
//         console.log("broke bitch");
//     }
// }

/* while do while */
// let username2 = "";
// while (username2 =="") {
//     username2=window.prompt("enter name");
// }


// let username;

// do{
//     username=window.prompt("wow");
// }while (username=="")

/*for loop */

// for (let counter = 0; counter < 10; counter++) {
//     console.log(counter);
    
// }

/*break continue */
// for (let int = 0; int < 20; int++) {
//     if (int ==13) {
//         continue;
//         break;
//     }
//     console.log(int);
// }

/* nested loop */

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
    
// }

/* functions */
// func1();

// function func1() {
//     let age = 31;
//     let name ="wow";
//     func2(age,name);
// }
// function func2(a,b) {
//     console.log("fuck you "+ b);
//     console.log("your " + a +" years old");
// }

/* ternary op */

// let age = 21;

// age ==19 ? console.log(age) : console.log(age + 1);


/*let limited to block scope 
    var limited to a funcktion
    u can use var to access outside conditions like for or if 
    global variable = can change browser so dont use var outside func*/

/* `` ?? */
// let username = "wow";

// console.log(`Your name ${username}`);


/* locale and options */


// let mynum = 313131.69;

// mynum = mynum.toLocaleString("en-US",{style:"currency",currency:"USD"})
// mynum = mynum.toLocaleString(undifenied,{style:"currency",currency:"USD"}) locale bilgiyi kullanir undifenied
// console.log('====================================');
// console.log(mynum);
// console.log('====================================');

/* guessing game  */
// const guess_number = Math.floor(Math.random()*10+1);



// document.getElementById("submit").onclick = function(){

//     let guess = 0 ;
//     guess= document.getElementById("textbox1").value ;
//     guess=Number(guess);
//     if (guess_number == guess) {
//         document.getElementById("answer").innerHTML = guess + " is correct guess";
//     } else {
//         document.getElementById("answer").innerHTML = guess + " is not correct guess try again";
//         document.getElementById("rigthguess").innerHTML = "answer is " + guess_number;
//     }

// }


/* Arrays */

// let fruits = ["appel","orange","banana"];
//     fruits[2]="coconut";

//     fruits.push("lemon");
// fruits.pop(); son element gider
// fruits.unshift("mango");
// fruits.shift(); ilk element gider

// let length = fruits.length;
// let index = fruits.indexOf("kiwi")

// console.log(fruits);


/* loop arrays */

// let prices = [5,10,15,20];
// for (let i = 0; i < prices.length; i++) {
//     const element = prices[i];
//     console.log(element);
    
// }
// for(let price of prices){
//     console.log(price);
// }\


/*sort array */

// let fruits = ["banana","apple","orange","mango"];

// fruits=fruits.sort();
// fruits=fruits.sort().reverse;


// for (let fruit of fruits){
//     console.log(fruit);
// }

/* 2D arrays */

// let fruits = ["apple","orange","banana"];
// let veg= ["carrots","onions","patatoes"];
// let meat = ["eggs","chikecn","fish"];

// let list   = [fruits,veg,meat];

// list [0][0] = "mango";

// list = list.sort();

// for(let i of list){
//     console.log(i);
// }


// for(let i of list){
//     for(let food of i){
//         console.log(food);
//     }
// }

/* spread operator unpack */

// let numbers = [1,2,3,4,5,6,7,8,9];

// console.log(...numbers);

// let maximum = Math.max(...numbers);
// console.log(maximum);



/* rest parmater */

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,b,c,d,e));

// function sum(...numbers) {
//     let total = 0;
//     for(let number of numbers)
//     {
//         total+=number;
//     }
//     return total;
// }

/* call back u can use as a stopper for next functions */

// sum(2,3,displayConsole);

// function sum(x,y,callBack) {
//     let result = x+y;
//     callBack(result);
// }

// function displayConsole(output) {
//     console.log(output);
// }

// function displayDOM(output) {
//     document.getElementById("mylabel").innerHTML = output;
// }

/* array.forEach() */

// let students = ["woww","nowwww","fuck"];

// students.forEach(anam);
// students.forEach(baban);

// function anam(element,index,array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function baban(element) {
//     console.log(element);
// } 

/* array.map() */


// let numbers = [1,2,3,4,5];

// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element) {
//     return Math.pow(element,2);
// }

// function print(element) {
//     console.log(element);
// }


/* array.filter(); */


// let ages = [11,12,13,19,26,92,19];
// let adults = ages.filter(asap);

// adults.forEach(print);

// function asap(element) {
//     return  element >18   ;
// }
// function print(element) {
//     console.log(element);
// }

/* array.reduce(); take sum of the array */

// let prices = [5,10,15,20,35];
// let total = prices.reduce(checkout);
// console.log('====================================');
// console.log(total);
// console.log('====================================');

// function checkout(total,element) {
//     return total+element;
// }


/* sort array */

// let grades = [100,50,90,60,80,70];

// grades = grades.sort(decending);

// grades.forEach(print);

// function decending(x,y) {
//     return y-x;
// }

// function print(element) {
//     console.log(element);
// }


/* func expressions */


// const greeting = function(){
//     console.log("hello");
// }
// greeting();
// count = 0;

// function increase() {
//     count+=1;
//     document.getElementById("label").innerHTML = count;
// }



/*arrow func */

// let grades = [50,60];

// grades.sort((x,y)=> y-x);
// grades.forEach((element)=>console.log(element));

/* shuffle array  */

// let cards = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];

// shuffle(cards);

// cards.forEach(card => console.log(card));

// function shuffle(array) {
//     let currentIndex  = array.length;

//         while (currentIndex != 0) {

//             let randomIndex = Math.floor(Math.random() * array.length);
//             currentIndex -= 1;

//             let temp = array[currentIndex];
//             array[currentIndex] = array[randomIndex];
//             array[randomIndex]= temp;
//         }
//         return array;
// }

/* nested func */
//     let userName = "bro";
//     let userInbox = "1";
// login();
// function login() {

//     welcome();
//     message();
//     function welcome() {
//         console.log(`Welcome ${userName}`);
//     }
//     function message() {
//         console.log(`U Have ${userInbox} messages`);
//     }
// }

/* maps */

// const store = new Map([
//     ["hat1", 60],
//     ["hat2", 80],
//     ["hat3", 90]
// ])

// store.set("hay4", 100);
// store.get("hat");
// console.log(store.size);
// console.log(store.has("hat1"));

// store.forEach((value,key) => console.log(`${key} $${value}`));

/* object  */
/* this */

// const car1 = {
//     Model: "ferarri",
//     drive: function () {
//         console.log(`you are driving ${this.Model}`);
//     }
// }
// car1.drive();

/* classes */

// class player {
//     score = 0;
//     pause(){
//         console.log("paused");
//     }

//     exit(){
//         console.log("exited");
//     }
// }

// const player1 = new player();

// player1.exit();

/* constructer */

// class student {
//     constructor(name,age,gpa){
//         this.age = age;
//         this.name = name;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`fuck you ${name}`);
//     }
// }

// const student1 = new student('rin',15,3.4);

// console.log(student1);
// student1.study();

/* static */

// class player {
//     static score = 0;

//     constructor(gpa){
//         this.gpa = gpa;
//             player.score +=1;
//     }
// static study(){
//     console.log(5);
// }

    
// }

// const player1 = new player(3.4);
// const player2 = new player(5);
// console.log(player.score);

/* inheritance */

// class animal {
//     alive = true;

//     eat(){
//         console.log(` ${this.name} eating`);
//     }
//     sleep(){
//         console.log(` ${this.name} sleeping`);
//     }
// }
// class rabbit extends animal{
//     name = "rabbit";

//     jump(){
//         console.log(` ${this.name} jumping`);
//     }
// }


// const rabbit1 = new rabbit();

// rabbit1.eat();

/* super invoke constructer of the parent class */

// class Animal{
//     constructor(name , age)
//     {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal{
    
//     constructor(name,age,speed){
//         super(name,age); kullanmazsan parent gormez
//         this.speed = speed;
//     }
// }

// const rabbit = new Rabbit("salatalik",15,35);
// console.log(rabbit);

/* getter setter */

// class Car{
//     constructor(power){
//         this._power=power;
//         this._gas = 50;
//     }
//     get power(){
//         return this._power;
//     }
//     get gas(){
//         return `${this._gas}L  (${this._gas / 50 * 100 }%)`;
//     }
//     set gas(value){
//         if (value > 50) {
//             value = 50  ;
//         }else if (value < 0 ) {
//             value= 0;
//         }{

//         }
//     }
// }

// let car= new Car(400);
// console.log(car.power);
// car.gas= 51;
// console.log(car.gas);


/* object as argument /array */

// changecolor(car1,"yellow");
// displayinfo(car1);

// function displayinfo(car) {
//     console.log(car.model);
//     console.log(car.color);
// }

// function changecolor(car,color) {
//     car.color = color;
// }

// const cars=[car1,car2,car3];


/* anonim objects */


// let cards = [
//     new Card("A","hearts"),
//     new Card("A","spades")
// ];

// console.log(cards[0]);


/* erorr handling */

// try {
//     let x  = window.prompt("enter #");
//     x= Number(x);
//     if (isNaN(x)) throw "wasnt number";
//     if(x=="") throw "emty";

//     console.log(`${x}`);
// } catch (error) {
//     console.log(error);
// }finally{
//     console.log('====================================');
//     console.log("activatessssss");
//     console.log('====================================');
// }



/* setTimeout() */

// setTimeout(() => {
//     firstmessage();
// }, 3000);

// let timer1 = setTimeout(firstmessage,6000);

// function firstmessage() {
//     alert("this 500 ");
// }

// clearTimeout(timer1);

/* setinterval */


// let count=0;
// let max = window.prompt("#");
// max = Number(max);

// let mytimer =setInterval(() => {
//     countUp();
// }, 1000);

// function countUp() {
//     count +=1;
//     console.log(count);
//     if (count>= max) {
//         clearInterval(mytimer)
//     }
// }

/* console.time() */

// console.time("response time");

// // alert("click ok" );

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// console.time("response time");

/* promise ,async*/

// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = true;

//     if (fileLoaded) {
//         resolve("file Loaded");
//     }else{
//         reject("not");
//     }
// });

// promise.then(value=> console.log(value))
//     .catch(error => console.log(error));



 /* await  */
// async function loadFile(){

//     const promise = new Promise((resolve, reject) => {
//       let fileLoaded = true;
  
//       if(fileLoaded){
//           resolve("File loaded");
//       }
//       else{
//           reject("File NOT loaded");
//       }
//     })
  
//     try{
//       document.getElementById("myH1").innerHTML = await promise;
//     }
//     catch(error){
//       document.getElementById("myH1").innerHTML = error;
//     }
//   }
//   loadFile();
  


// //import {PI, getCircumference, getArea} from "./math_util.js";
// import * as MathUtil from "./math_util.js";

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);

// // ************************ math_util.js ************************
// export const PI = 3.14159;

// export function getCircumference (radius) {
//     return  2 * PI * radius
// }
// export function getArea (radius) {
//     return  PI * radius * radius;
// }

/* DOOOOM */

/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/
/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
*/
/*
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/
/*
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";
*/
/*
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})



/* html changes */
/*
let element = document.querySelector("#fruit");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)


// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = "Bro";
document.body.append(nameTag);

//const myList = document.querySelector("#fruit");
//const listItem = document.createElement("li");
//listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);

/*css */

// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#222222";
// title.style.color = "rgb(50, 200, 250)";
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "2px solid";
// title.style.display = "block";



/* events */


// //const element = document.getElementById("myButton");
// //const element = document.body;
// //const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");

// //element.onclick = doSomething;
// //element.onload = doSomething;
// //element.onchange = doSomething;
// //element.onmouseover = doSomething;
// //element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething(){
//     //alert("You did something!");
//     element.style.backgroundColor = "red";
// }
// function doSomethingElse(){
//     //alert("You did something!");
//     element.style.backgroundColor = "lightgreen";
// }



/*.addEventListener */

// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue(){
//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightblue"
// }

/* html hide  */

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// myButton.addEventListener("click", () => {

//     if(myImg.style.visibility == "hidden"){
//         myImg.style.visibility = "visible";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//     }
// })



/* detect key presses */

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event){
    
//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x + "px";
//             break;
//         default:
//             break;
//     }
// }

/* animations  */

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", slide);
// //myButton.addEventListener("click", rotate);
// //myButton.addEventListener("click", scale);

// function slide(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             x+=1;
//             y+=1;
//             myAnimation.style.top = y + 'px';
//             myAnimation.style.left = x + 'px';
//         }
//     }
// }
// function rotate(){
//     let timerId = null;
//     let degrees = 0;
 
//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(degrees >= 360){
//             clearInterval(timerId);
//         }
//         else{
//             degrees+=1;
//             myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }
// function scale(){
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;
 
//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(scaleX <= 0.1 || scaleY <= 0.1){
//             clearInterval(timerId);
//         }
//         else{
//             scaleX-=0.01;
//             scaleY-=0.01;
//             myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }



/* canvas  */

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// /*
// //DRAW LINES
// context.strokeStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();
// */
// /*
// //DRAW TRIANGLE
// context.strokeStyle = "grey";
// context.fillStyle = "yellow";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();
// */
// /*
// //DRAW RECTANGLE
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);
// */
// /*
// //DRAW CIRCLE
// //(x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStyle = "lightblue";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();
// */
// //DRAW TEXT
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);

/* WINDOW */

// window = interface used to talk to the web browser
//                   the DOM is a property of the window

// const myButton = document.querySelector("#myButton");

//console.dir(window);
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://google.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//myButton.addEventListener("click", () => window.open("https://google.com"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());

//window.alert("Hello!");
//window.confirm("Press OK to coninue!");
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/

/* cookies  */
// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 saved in name=value pairs
 
//console.log(navigator.cookieEnabled);
//document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//let allCookies = document.cookie;
//console.dir(allCookies);


// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", lastText.value, 365);
// });
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// });

// function setCookie(name, value, daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; path=/`
// }
// function deleteCookie(name){
//     setCookie(name, null, null);
// }
// function getCookie(name){
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let result = null;
    
//     cArray.forEach(element => {
//         if(element.indexOf(name) == 0){
//             result = element.substring(name.length + 1)
//         }
//     })
//     return result;
// }
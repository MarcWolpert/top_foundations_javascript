function favoriteAnimal(animal){
//parameters above
    return `${animal} is my favorite animal!`;

}

//arguments on function call
console.log(favoriteAnimal('Dog'));

console.log(favoriteAnimal('Dog').replace('favorite','most hated'));
console.log(favoriteAnimal('Dolphin').split().join(" ").replace("Dolphin","Human"));

console.log(Math.random()*100);

//functions that are part of classes are called methods.
//for instance, favoritAnimal() is a function and Math.random() is a method

function random(maxNum){
    /**
     * @param {Number} maxNum Upper bound for the range of random numbers 
     * @return {Number} returns a random number with the upper bound set in the parameter
     */
    return Math.floor(Math.random()*maxNum)
}

function random2(maxNum=20){
    /**
     * @param {Number} maxNum Upper bound for the range of random numbers 
     * @return {Number} returns a random number with the upper bound set in the parameter
     */
    return Math.floor(Math.random()*maxNum)
}

console.log(`Here is a random number with upper bound ${random(5)}`);
console.log(random2());

const originals = [1,23,59];
const squared=originals.map(item => item**2);
console.log(squared);

const randomArrow=originals.map(item => random2(item));
console.log(randomArrow);

const list = [18, 235, 17, 89];
//arrow functions
const isSeventeen = list.map(item => console.assert(item === 17, `${item} is not 17.`));

function checkAge(age) {
    return age>18 ? True : console.log('Did parents allow you?')
  }

checkAge(17);

//function declarations vs function expressions
//function declarations are typical functions in other languages, however
//function expressions are assigned and only accessible once they have been reached during execution


//call stack in js is typical lifo (stack based data structure)
// function fn(){
//     fn();
// }
// fn();

//FIZZBUZZ

const fizzNumber=25

function fizzBuzz(number){
    for (let i=0; i<number;i++){
        if  ((i % 5===0) && (i % 3 === 0)){
            console.log("Fizz Buzz");
            continue;
        }
        if  (i % 5===0){
            console.log("Buzz");
            continue;
        }
        if  (i % 3===0){
            console.log("Fizz");
            continue;
        }
        console.log(i);
    }
    
}

fizzBuzz(fizzNumber);

//Errors

const a = "hello";
const b = "there";

//console.log(c); //C NOT DEFINED THEREFORE REFERENCE ERROR
// c is not defined

// let c= "Yo gabba gabba"; //


function foo(bar){
    function bar(){
        console.log("This is inside foo.");
    }
    bar();
}

function bar(){
    console.log("Bar is function expresion.");
}

//due to dynamic scoping here
foo(bar);

// // basic syntax of a function
// function sayHello() {
//     console.log('Hello');
// }
// sayHello();
// // pass arguments to a function
// // how to use arguments with functions
// function output(text) {
//     console.log(text);
// }
// output('Hello', 'other text');// only the first arg is used by the function, second one is ignored 

// // a function can also return a value
// function sum(num1, num2) {
//     return num1 + num2;
// }
// //var result = sum(1,2);
// //output(result);
// //console.log(result);
// //output(sum(1, 2));
// console.log(sum(1, 3));

// // makeNoise function with no parameter
// const makeNoise = function() {
//     console.log("Pling");
// }
// makeNoise();



// // calculate power
// function power(base, exponent) {
//     let result = 1;
//     for (let countExponent = 0; countExponent < exponent; countExponent++) {
//         result *= base;
//     }
//     return result;
// }
// output(power(2, 5));

// // Binding and Scope
// let x = 10;
// if(true) {
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z);
// }
// // y is not visible here
// console.log(x + z);

// // when multiple bindings have the same name

// const halve = function(num) {
//     return n / 2;
// }
// let n = 1000;
// console.log(halve(100000)); // 500
// console.log(n); //1000

//Nested scope


// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//         let ingredientAmount = Amount * factor;
//         if(ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`)
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.5, "cup", "tahini");
//     ingredient(0.25, "can", "lemon juice");
//     ingredient(1, "can", "garlic");
//     ingredient(2, "can", "olive oil");
//     ingredient(0.5, "can", "teaspone");
// }

// // 
// let launchMissile = function() {
//     missileSystem.launch("now");
// };
// if(safeMode) {
//     launchMissile = function {
//         // do nothing
//     }
// }

// // Arrow Function
// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };

// const square1 = (x) => { return x * x; };
// const square2 = x => x * x;

// const horn = () => {
//     console.log("Toot");
//     };
// horn();

// function greet(who) {
//     console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");

function chicken() {
    return egg();
    }
function egg() {
    return chicken();
    }
console.log(chicken() + " came first.");
    // → ??
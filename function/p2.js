console.log("The future says: ", future());

function future() {
    return "I will be in Microsoft";
}

// Arrow function
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
};

// The call Stack

function greet(who) {
    console.log("Hello" + who);
}
greet("Harry");
console.log("Bye");

// Closure

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

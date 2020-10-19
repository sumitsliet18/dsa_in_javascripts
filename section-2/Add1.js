// method-1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000 } seconds.`)


// method-2
function addUpTo(n) {
    return n * (n + 1) / 2;
}
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed : ${(time2 - time1) / 1000 } seconds.`)
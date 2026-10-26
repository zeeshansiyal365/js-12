
/* P1: Check Even or Odd */

function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}

checkEvenOdd(4);
checkEvenOdd(7);


/* P2: Calculate Square */

function square(n) {
    return n * n;
}

console.log("Square:", square(5));


/* P3: Print Table of a Number */

function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

printTable(5);


/* P4: Find the Maximum of Two Numbers */

function findMax(a, b) {
    return a > b ? a : b;
}

console.log("Maximum:", findMax(10, 20));


/* P5: Check Positive, Negative, or Zero */

function checkNumber(num) {
    let result = num > 0
        ? "Positive"
        : num < 0
            ? "Negative"
            : "Zero";

    console.log(result);
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

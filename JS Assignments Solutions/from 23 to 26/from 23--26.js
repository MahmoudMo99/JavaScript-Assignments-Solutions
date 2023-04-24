//First 
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.99)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.floor(100000.99)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Number(100000.4.toFixed(0))); // 100000
console.log(10 ** 5); // 100000
console.log(parseInt("100000.500 Mahmoud")); // 100000
console.log(Math.round(parseFloat("100000.400 Mahmoud"))); // 100000
console.log(Math.max(99999, 8000, 100000, 50000)); // 100000

//Second
console.log(Number.MIN_SAFE_INTEGER * -1);

//Third
console.log(`${Number.MAX_SAFE_INTEGER}`.length);

//Fourth 
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))) ; // 100.57

//Fifth
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//Sixth
let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10

//Seventh
console.log((Math.random() * 4) + 0); // 0 || 1 || 2 || 3 || 4


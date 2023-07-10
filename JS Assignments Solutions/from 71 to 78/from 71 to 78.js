// First

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function(acc, current){
    return acc + current;
});

console.log(newMix);

// Elzero


// Second

let myString = "EElllzzzzzzzeroo";

let newString = myString.split("").filter(function(ele, index){
    return  myString.indexOf(ele) === index;
}).reduce(function(acc, current){
    return acc + current;
});

console.log(newString);

// Elzero

// Third

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function(acc, current){
    return acc.concat(current);
}).split("").filter(function(ele){
    return ele !== ",";
}).reduce(function(acc, current){
    return acc + current;
});

console.log(newArray);
// Elzero

// Fourth
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNums = numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele){
    return -ele;
})

console.log(newNums);

// [-1, -10, 10, 20, -5, -3]

// Fifth

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNum = nums.reduce(function(acc, current){
    return current % 2 === 0 ? acc * current : acc + current;
}, 1)

console.log(newNum);
// 500
// //First

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//Second

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

//Third

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// // Write One Single Line Of Code

finalArr = finalArr.concat(arrOne).concat(arrTwo).sort().reverse();
//another Way
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Fourth

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][website.length - website.length].slice(website.length).toUpperCase()); // ZERO

//Fifth

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

if(haystack.includes(needle)){
    console.log("Found");
}
if(needle === haystack[1]){
    console.log("Found");
}
if(haystack.indexOf(needle)){
    console.log("Found");
}

//Sixth

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// // Your Code Here
allArrs = arr1.concat(arr2).sort().join("").slice(arr1.indexOf("C") + arr2.indexOf("Y")).toLowerCase();

console.log(allArrs); // fxy

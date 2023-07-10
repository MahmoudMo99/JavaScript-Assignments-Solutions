// //First

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i<=end; i=i+10){
//     if(i==exclude){
//     continue;
//     }
//  console.log(i);
// }


// //Second

// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start; i>=stop; i--){
//     if(i<10){
//         console.log(`${end}${i}`);
//     }
//     else{
//         console.log(i);
//     }

// }

//Third


// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start; i<=end; i++)
// {
//     console.log(i);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${end-breaker}`);

// }

//Fourth

// let index = 10;
// let jump = 2;

// for (;;) {
//   // Write Your Code Here
//   console.log(index);
//   index = index - jump;
//   if(index == jump){
//     break;
//   }

// }

//Fifth

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// number = letter.length;
// for (let o = 0; o < friends.length; o++){
//     if(friends[o].startsWith(letter.toUpperCase())){
//         continue;
//     }
//     console.log(`"${number} => ${friends[o]}"`);
//     number++;
// }
 

//Sixth

// let start = 0;
// let swappedName = "elZerO";
// let result = "";

// for(let i = start; i < swappedName.length; i++){
//     if(swappedName[i] === swappedName[i].toLowerCase()){
//         result += swappedName[i].toUpperCase();
//     }else if(swappedName[i] === swappedName[i].toUpperCase()){
//         result += swappedName[i].toLowerCase();
//     }
// }
// console.log(result);

//Seventh


// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let v = start + mix.indexOf(2); v < mix.length; v++){
//     if(typeof mix[v] === "string"){
//         continue;
//     }
//     console.log(mix[v]);
// }

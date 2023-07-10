let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;



while(index < friends.length){
    if(typeof friends[index] === "number" || friends[index].startsWith("A")){
        index++;
        continue;
    }
    console.log(`"${++counter} => ${friends[index]}"`);
    index++;

}


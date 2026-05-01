//25. Array 
/*let fruits = ["apple","banana","Orange"];
//fruits[0] = "coconut";
//fruits.push("coconut");  --sona ekliyo
//fruits.pop();  --sondakini siler
//fruits.unshift("mango");  --en başa ekler
//fruits.shift(); --Dizinin ilk (en baştaki) elemanını siler ve sildiği elemanı geri döndürür.

// let numOfFruits = fruits.length;
//let index = fruits.indexOf("apple");

for(let i = 0; i < fruits.length;i+=2){
    console.log(fruits[i]);
}


fruits.sort().reverse();  --sort meyveleri alfabetik sıraya göre sıralar.  -- reverse te tersine çeviriyo
for(let fruit of fruits){
    console.log(fruit);
}
*/

//26. Spread Operator  --Fonksiyon çağrısında, bir dizinin elemanlarını tek tek yayar.

/*let numbers =[1,2,3,4,5];
let maximum = Math.max(...numbers);
console.log(maximum);

let username = "Bro Code";
let letters = [...username].join("-");
console.log(letters);


let fruits = ["apple","banana","Orange"];
let newFruits = [...fruits];
console.log(newFruits);

*/

//27. Rest Parematers  -- Fonksiyon parametresi olarak kullanıldığında, gelen tüm elemanları diziye dönüştürür.

/*
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;

}

const total = sum(1,2,3,4,5);
console.log(`Your total is $${total}`);


function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        return result / numbers.length;
    }

}

const total = getAverage(75,100,85,90,50);

console.log(total);



function combineStrings(...strings){
    return strings.join(" ");
}
const fullname = combineStrings("Mr.","SungerBob","Squarepants","III");

console.log(fullname);

*/

//28.Dice Roller Program

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value); //dizinin içine attım
        images.push(`<img src="dice_images/${value}.png" alt ="Dice ${value}"> `);

    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}




































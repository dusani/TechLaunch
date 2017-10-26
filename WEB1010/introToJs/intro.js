// Exercise 1
console.log("\n");
console.log("Excersie 1");
var op1 = 12 + 12; // Addition problem that equals 24
var op2 = 48 - 24; // Subtraction problem that equals 24
var op3 = 4 * 6; // Multiplication problem that equals 24
var op4 = 48 / 2; // Division problem that equals 24

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);

//Exercise 2
console.log("\n");
console.log("Excersie 2");
var op1 = 6 % 3;
var op2 = 10 % 2;
var op3 = 5 % 3;

console.log(op2 >= op3);
console.log(op1 == op2);

//Exercise 3
console.log("\n");
console.log("Excersie 3");
var line1 = ("Test Grades as follows: \n");
var line2 = ("\t Student 1: 96 \n");
var line3 = ("\t Comment: \"None\"");

console.log(line1 + line2 + line3);

// Exercise 4
console.log("\n");
console.log("Excersie 4");
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray[2] + myArray[4]);

// Exercise 5
console.log("\n");
console.log("Excersie 5");
var info = {
    firstName: "Daniel",
    lastName: "Usani",
    age: 32,
    favoriteGame: "Assassins Creed",
    favoriteColor:"Green",
}

console.log("My name is " + info.firstName + " " + info.lastName + ". I am " + info.age + " years old. My favorite color is " + info.favoriteColor + ", and I love playing " + info.favoriteGame + "." );

// Exercise 6
console.log("\n");
console.log("Excersie 6");
var num = 2;

while(num < 10) {
    console.log(num);
    num+=2;
}

//Exercise 7
console.log("\n");
console.log("Excersie 7");

for(num = 1; num<10; num+=2){
    console.log(num);
}
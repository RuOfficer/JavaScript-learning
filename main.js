// -------------------№ 1----------------

let a = 10;
let b = 12;
let sum = a + b;
console.log(sum);

// ----------

let str1 = "Kostya";
let str2 = "Sanin";
let sumStr = str1.length + str2.length;
console.log(sumStr);

// ----------

let inputNumber = prompt("Enter your number");
let num1 = inputNumber[0];
let num2 = inputNumber[1];
let num3 = inputNumber[2];
let sumNum = +num1 + +num2 + +num3;

console.log(sumNum);

// -------------------№ 2----------------

let x = prompt("Enter first number");
let y = prompt("Enter first number");

if (x > y) {
  console.log(`${x} number is greater`);
} else {
  console.log(`${y} number is greater`);
}

// ----------

let yourMonth = +prompt("Enter the required month");

switch (yourMonth) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("Jule");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Month not entered");
}

// -----------
let sideA = prompt("Введите длинну стороны квадрата");
let radius = prompt("Введите радиус круга");
let sideB = sideA;
let circle = 2 * (3.14 * radius) ** 2;
let square = sideA * sideB;

if (circle < square) {
  console.log("Кург поместиться в квадрат");
} else {
  console.log("Круг не поместиться в квадрат");
}

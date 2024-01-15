//write a function to find the area of a triangle where lengths of the three of its sides are given
function triangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
var sideA = 3;
var sideB = 4;
var sideC = 5;

var areaOfTriangle = triangleArea(sideA, sideB, sideC);
console.log("Area of the triangle:", areaOfTriangle);
//write a function to return the absolute diff between two numbers
function absoluteDifference(num1, num2) {
    return Math.abs(num1 - num2);
}
var number1 = 8;
var number2 = 3;
var diff = absoluteDifference(number1, number2);
console.log("Absolute difference:", diff);
//Write a function to determine whether a given year is leap year or not 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
var yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
} else {
    console.log(yearToCheck + " is not a leap year.");
}
//Write a function to return the sum of all elements in the array
function arraySum(arr) {
    var sum = 0;    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var numbers = [10, 25, 36, 48, 51];
var result = arraySum(numbers);
console.log("Sum of the array elements:", result);
//Write a function to swap pairs of adjacent digits of a given integer of even length
function swapAdjacentDigits(inputNumber) {
    var numberString = inputNumber.toString();
    if (numberString.length % 2 !== 0) {
        console.log("The input number should have an even length.");
        return;
    }
    var swappedNumber = "";
    for (var i = 0; i < numberString.length; i += 2) {
        swappedNumber += numberString[i + 1] + numberString[i];
    }
    return parseInt(swappedNumber, 10);
}
var input = 123456;
var swappedResult = swapAdjacentDigits(input);
console.log("Original number:", input);
console.log("Number after swapping adjacent digits:", swappedResult);
//Write a function to get the largest even number from an array of integers
function largestEvenNumber(arr) {
    var maxEven = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && (maxEven === 0 || arr[i] > maxEven)) {
            maxEven = arr[i];
        }
    }
    return maxEven;
}
var numbers = [2, 86, 50, 14, 79, 10];
var result = largestEvenNumber(numbers);

console.log("Largest even number:", result);
//// 7. Write a function to delete the rollno property from the following object. Also print the object before or after deleting the property.
let student = {
    name: "John Doe",
    class: "VI",
    rollno: 12,
  };
  function deleteRollNo(obj){
    delete obj.rollno;
    return obj;
  };
  console.log(deleteRollNo(student));
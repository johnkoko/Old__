/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

console.log("-------------------- EXERCISE 1 ------"); 
const area = function (l1, l2) { 
    let areaM2 = l1 * l2; return areaM2;
 }; 
 console.log(area(10, 12));
 console.log("\n");

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("-------------------- EXERCISE 2 ------")

let crazySum = function (num1, num2) {
    intNum1 = parseInt(num1)
    intNum2 = parseInt(num2)

    if (intNum1 === intNum2) { 
        let multBy3 = (intNum1 + intNum2) * 3; console.log(multBy3)
     } else { 
         let justSum = intNum2 + intNum2
         console.log(justSum)
        } 
    }
    
    crazySum(2, 2); //Incorrect sum for the case "else"
    
    console.log("\n");

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("-------------------- EXERCISE 3 ------")

let crazyDiff = function (givenNumber) { 
    intGivenNumber = parseInt(givenNumber)
    if (intGivenNumber > 19) {
        let graterThan = (intGivenNumber - 19) * 3
         console.log(graterThan)
    } else { let absDiff = 19 - intGivenNumber
        console.log(absDiff)
    }
}
crazyDiff(20)

console.log("\n");


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

console.log("-------------------- EXERCISE 4 ------")
let boundary = function (n) {
    intN = parseInt(n)
    let trueOrFalse = intN >= 20 && intN <= 100 ? "True" : "False"
    console.log(trueOrFalse)
 }
boundary(5)

console.log("\n")

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("-------------------- EXERCISE 5 ------");

let strivify = function (inString) {
    if (inString === "Strive") { console.log("Strive")
 } else {
     let striveFront = "Strive"
     console.log(striveFront.concat(" ", inString))
    }
}

strivify("School")
strivify("Strive")

console.log("\n")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

console.log("-------------------- EXERCISE 6 ------");

let check3and7 = function (positifNum) {
    let intPositifNum = parseInt(positifNum)

    if (intPositifNum % 3 === 0 || intPositifNum % 7 === 0) { 
        console.log("Is multiple of 3 or 7.")
    } else { 
        console.log("Not multiple of 3 or 7.")
    }
}
check3and7(7)

console.log("\n");

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

console.log("-------------------- EXERCISE 7 ------")
let reverseString = function (inputString) { 
    let strReversed = inputString.split(/(?:)/u).reverse().join("")
    console.log(strReversed)
}
reverseString("Strive")

console.log("\n");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code: 

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: identify the function that needs to be used.
// identify what is being changed in the function to make it make sense.
// with the use of if and else i can set perameters around my plugged in values. 
//end with else to catch all other outputs.



const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (water) => {
if (water > 212) return "yes"
else if (water < 212) return "no"
else return ("perfect")
}

// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))



//output yes, no, perfect.




// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: first combine the 2 arrays using concat.
// then create a const that is the value of the 2 arrays combined
//then run the new array in console log with .length 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// const CombinedArray = padres1998WorldSeriesRuns.concat(padres1984WorldSeriesRuns)

// console.log(CombinedArray.length)


//output 9

// Expected output: 9



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: make string into array using .split
// reverse aray using .reverse
// join array and make it a string using .join


const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"


// const splitString = currentCohort.split("")

// const reverseArray = splitString.reverse()

// const newString = reverseArray.join("")

// console.log(newString) 


//output: 2202 letoH


//i feel as if there is another way to do this but im not sure how other than this way

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
const givenValue2 = 10

// {
//  myNumbers.lastIndexOf(givenValue1)
//  myNumbers.lastIndexOf(givenValue2)

 

// }
//  console.log (myNumbers.lastIndexOf(givenValue1))
//  console.log (myNumbers.lastIndexOf(givenValue2))

//output 7 and 8

// Expected output: 8







// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: first i got the first array and sorted it using sort()
//then i used .reverse() to get it into Decending order
//next i did the same process with the second array.






const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


sanDiegoSummerTemperatures.sort()
sanDiegoSummerTemperatures.reverse()

sanDiegoWinterTemperatures.sort()
sanDiegoWinterTemperatures.reverse()



console.log(sanDiegoSummerTemperatures)
console.log(sanDiegoWinterTemperatures)
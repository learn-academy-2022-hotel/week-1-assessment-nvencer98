// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10, i forgot that when using length it starts at 1 and not 0 like a index

// --------------------2) What will this log?

const greeting = "Hello World!"
 //console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o , the 4th index of the value of greeting is o because it starts at 0 and 4 is actually in the 5th spot.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby, because when calling index it starts at 0 ruby was in the second spot which means it actually the second index.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]

 console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: we got a error because you cant uppercase a something in a array. i would have to make it string first. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 //console.log(typeof dataTypes.length)

// a) Your answer: 4 
// b) Verify and explain: "number", because length will give you the number 4 which is the length value and date.type is telling you what 4 is, "4 is a number"

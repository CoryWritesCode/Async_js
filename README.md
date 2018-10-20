# Asynchronous Code Drills

## Objective

- Practice Asynchronous JavaScript concepts discussed in the video lecture

## Setup

1. Make sure all the html has loaded before using JavaScript
2. Create a new project folder and connect it to a github repository. Copy this README.md file into it.
3. Create an index.html file and an app.js file and link the two together.

## Async: Now and later

- JavaScript programs are executed in chunks. Chunks that execute now and others that will execute later. Let’s explore that concept.

1. Create a function in app.js that will log a message to the console and return a number
2. The value returned should be stored in a global variable
3. Create another function that will log the result of multiplying the global variable multiplied by 4
4. Create a setTimeout function that will call the second function you created after 2 seconds

## Callbacks

1. Create a function called getWords that will do the following:
    - log a word
    - wait 3 seconds
    - log another word
    - wait 2 second
    - log a third word
    - wait 1 second
    - log a fourth word
2. Before you call the function try to determine how the log statements will be printed in the console
3. Call the getWords function
4. Create a function called countdown that accepts two parameters: num and callback
5. Create another function called done that will log a message to the console
6. The countdown function should countdown from the number you passed it, delaying 1 second each time, and when it gets to 1 it should call the callback function
7. Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function

## Promises

1. Create a global variable and set it equal to true or false
2. Create a new promise named orderingChickenSandwich
3. In the resolver function for the promise check if the global variable is true.
4. If the global variable is true, create an object with two properties (key/value pair):
    - sandwich : chicken
    - veggies: lettuce
5. Resolve the object
6. If the global variable is false, create a variable and set it equal to a new Error. (hint)
7. Reject this new variable
8. Create a new function named orderFood that will call the promise you made and console log the result if the promise is fulfilled or if it is rejected
9. Call the orderFood function and test each outcome

## Chaining Promises

1. Create a new promise that will resolve the number 1 after 2 seconds
2. Then return the result multiplied by 2
3. Then return the new result multiplied by 4
4. Then return the new result multiplied by 6

Hint:

The Error constructor creates an error object. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
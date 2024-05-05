// Immediately Invoked Function Expression (IIFE)
// two usese :- 1. to avoid pollution from global varibale,  2. to execute the function immediately

(function chai() {
    console.log(`DB CONNECTED`)
})(); // semicolon is must to execute the further code

// () - function, () - execution

// (const code = () => {
    
// })
((name) => {  // parameters
    console.log(`DB CONNECTED TWO ${name}`)
})('Aditya')  // passing agruments
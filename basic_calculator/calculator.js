// Import the readline module
const readline = require("readline");

// create an interface for input and output

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for the first number
rl.question("Enter the first number: ", (firstInput) => {
  rl.question("Enter the operator (+,-,*,/): ", (operator) => {
    rl.question("Enter the second number: ", (secondInput) => {
      const num1 = parseFloat(firstInput);
      const num2 = parseFloat(secondInput);
      let result;
      //Perform calculation based on computer
      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        if (num2 === 0) {
          console.log("Cannot divide by zero!");
          rl.close();
          return;
        }
        result = num1 / num2;
      } else {
        console.log("Invalid operator!");
        rl.close();
        return;
      }
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});

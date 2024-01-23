function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero";
    }
}

function calculator() {
    console.log("Simple Calculator");
    console.log("Operations:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    let choice = prompt("Enter choice (1/2/3/4):");

    if (!['1', '2', '3', '4'].includes(choice)) {
        console.log("Invalid choice");
        return;
    }

    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));

    let result, operation;

    switch (choice) {
        case '1':
            result = add(num1, num2);
            operation = "Addition";
            break;
        case '2':
            result = subtract(num1, num2);
            operation = "Subtraction";
            break;
        case '3':
            result = multiply(num1, num2);
            operation = "Multiplication";
            break;
        case '4':
            result = divide(num1, num2);
            operation = "Division";
            break;
    }

    console.log(`${operation} result: ${result}`);
}

calculator();

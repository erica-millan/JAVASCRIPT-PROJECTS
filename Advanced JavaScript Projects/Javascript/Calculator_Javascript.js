//Creates an object to keep track of values.
const Calculator = {
    //This will display on the calculator screen, the current value.
    Display_Value: '0',
    //This holds the first operand for any expressions, we set it to null for now.
    // It's the first number that is entered.
    First_Operand: null,
    //This checks whether or not the second operand has been inputted by the user.
    //it's a flag that tells app to wait fro the second number.
    Wait_Second_Operand: false,
    //This holds the operator, we set it to null for now.
    //the lath operation that has been selected
    operator: null,
};


//This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    //calculator is an object that holds the current state opf the calculator.
    //creating 2 variables:
    //display value: current value in calculator
    //wait_second_operand: gets the flag telling if the calculator is waiting for the second 
    // number in operation
    //it's like writing:
    /*const Display_Value = Calculator.Display_Value;
      const Wait_Second_Operand = Calculator.Wait_Second_Operand; */
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //This checks if the Wait_Second_Operand is true and sets Display_Value
    //to the key that was clicked on.
    //decide whether to display num to screen or append number
    //if you press +, -, *, or / wait-sec-op gets set to true 

    if (Wait_Second_Operand === true) {
        //the next number will replace the number on the screen
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
        //if it's false then number will be getting appended
    } else {
        //Overwrite Display_Value if the current value is 0
        // append to it since calculator is not waiting for second operand.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points.
//Only adds a decimal point if there's not already one
function Input_Decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't
    //cause bugs in the operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //We are saying that if the Display_Value does not contain a decimal point
        //we want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}




//This section handles operators and is triggered when you press an operator button.
function Handle_Operator(Next_Operator) {
    //This line pulls out the current values from the calculators memory
    const { First_Operand, Display_Value, operator } = Calculator;
    //if the operator is pressed, we need to convert the current number
    //displayed on the screen into a number and then store the result in
    //Calculator.First_Operand if it doesn't already exist.

    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if the Second_Operand is true,
    //then updates the operator and returns it. 
    //will override operator if you select another one. 
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    //if there isn't an operand then store the number in first_operand
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
        //but if first operand exists then perfect the calculation
    } else if (operator) {//Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if the operator exists, property lookup is performed for that operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed.
        //this line is saying find the function in perform_calculation that matched the operator and run it using
        //the two provided operands
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //here the result is converted to fixed to 9 digits after decimal and
        //the number is resolved to its actual value
        //number is rounded 9 dec places
        result = Number(result).toFixed(9);
        //this will remove any trailing 0's
        result = (result * 1).toString();
        //display result and store it as new first operand so you can chain operations.
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    //calculator waiting for second number 
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//performs the caculation and returns the result
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    //displays the screen to show 0
    Calculator.Display_Value = '0';
    //clearing memory
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//defines a function called update_display. called wghenever the calc's state changes. 
//keeps the display in sync with internal state of calculator
//called after every change of state in calculator. (input, operator, decimal, reset etc.)
function Update_Display() {
//finds the class "calculator screen" and updates it 
    const display = document.querySelector('.calculator-screen');
    //sets the value on the screen to what is in display.value
    display.value = Calculator.Display_Value;
}

//update_Display function call
Update_Display();
// This section monitors button clicks and routes the action to the correct function.
//listening for clicks inside the .calculator-keys container and calls corresponding function 
//depending on what button was clicked to update calculator.
const keys = document.querySelector('.calculator-keys');
//checks what button was clicked
keys.addEventListener('click', (event) => {
    // The target variable is an object that represents the element
    // that was clicked.
    const { target } = event;
    // If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }

    // If the classList contains 'operator'
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    // If the classList contains 'decimal'
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // Ensures that AC clears all inputs from the calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})

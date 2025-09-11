function addNumbers() {
    //Creating 2 variables so I can add them
    var one = 1;
    var two = 2;
    sum = one + two;
    //Looks for "Math" in the HTML file and replaces it with what is included in the "sum" variable.
    document.getElementById("Math").innerHTML = sum;
}


function subtractNumbers() {
    //Creating 2 variables so I can subtract them
    var one = 1;
    var two = 2;
    diff = one - two;
    //Looks for "Math2" in the HTML file and replaces it with what is included in the "diff" variable.
    document.getElementById("Math2").innerHTML = diff;
}


function multiplyNumbers() {
    //Creating 2 variables so I can multiply them
    var one = 1;
    var two = 2;
    product = one * two;
    //Looks for "Math3" in the HTML file and replaces it with what is included in the "product" variable.
    document.getElementById("Mat").innerHTML = product;
}


function divideNumbers() {
    //Creating 2 variables so I can divide them
    var one = 1;
    var two = 2;
    quotient = one / two;
    //Looks for "Math4" in the HTML file and replaces it with what is included in the "quotient" variable.
    document.getElementById("Math4").innerHTML = quotient;
}

function moreMath() {
    //Adding Expression and put it in value variable
    var value = (1 + 2) * 10 / 2 - 5;
    //Looks for "Math5" in the HTML file and replaces it with what is included in the "value" variable.
    document.getElementById("Math5").innerHTML = value;
}


function modulusOperator() {
    //create modulus variable and set the result of 25%6 equal to it
    var modulus = 25 % 6;
    //Looks for "Math6" in the HTML file and replaces it with what is included in the "modulus" variable.
    document.getElementById("Math6").innerHTML = modulus;
}

function negateNum() {
    //set x = 1 so I can negate it
    var x = 1;
    //Looks for "Math7" in the HTML file and replaces it with what is included in the "x" variable.
    document.getElementById("Math7").innerHTML = -x;
}

function incrementNum() {
    //set x = 1 so I can increment it
    var x = 1
    x++;
    //Looks for "Math8" in the HTML file and replaces it with what is included in the "x" variable.
    document.getElementById("Math8").innerHTML = x;
}

function decrementNum() {
    //set x = 1 so i can decrement it
    var x = 1
    x--;
    //Looks for "Math9" in the HTML file and replaces it with what is included in the "x" variable.
    document.getElementById("Math9").innerHTML = x;
}

function randomNum() {
    //set x = to the expression containing the Math.random method to return rand number
    var x = (Math.random() * 100);
    //Looks for "Math10" in the HTML file and replaces it with what is included in the "x" variable.
    document.getElementById("Math10").innerHTML = x;
}
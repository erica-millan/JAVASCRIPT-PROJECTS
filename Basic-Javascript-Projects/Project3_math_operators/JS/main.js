function addNumbers() {
    var one = 1;
    var two = 2;
    sum = one + two;
    document.getElementById("Math").innerHTML = sum;
}


function subtractNumbers() {
    var one = 1;
    var two = 2;
    diff = one - two;
    document.getElementById("Math2").innerHTML = diff;
}


function multiplyNumbers() {
    var one = 1;
    var two = 2;
    product = one * two;
    document.getElementById("Mat").innerHTML = product;
}


function divideNumbers() {
    var one = 1;
    var two = 2;
    quotient = one / two;
    document.getElementById("Math4").innerHTML = quotient;
}

function moreMath() {
    var value = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = value;
}


function modulusOperator() {
    var modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = modulus;
}

function negateNum() {
    var x = 1;
    document.getElementById("Math7").innerHTML = -x;
}

function incrementNum(){
    var x = 1
    x++;
    document.getElementById("Math8").innerHTML = x;
}

function decrementNum(){
    var x = 1
    x--;
    document.getElementById("Math9").innerHTML = x;
}

function randomNum(){
    var x = (Math.random()*100);
    document.getElementById("Math10").innerHTML = x;
}
document.write(typeof "word");
document.write("10" + 5);


function my_Function() {
    //Since you can't fivide 0/0 , the result will be NaN
    document.getElementById("Test").innerHTML = 0 / 0;
}

function my_Function2() {
    //Using the isNaN function will test whether something is a number
    //Displays true since a string is not a number.
    document.getElementById("Test2").innerHTML = isNaN('This is a string.');
}

function my_Function3() {
    //Using the isNaN function will test whether something is a number
    //Displays false since a 5 is not a number.
    document.getElementById("Test3").innerHTML = isNaN('5');
}

function toInfinity() {
    //Using a number above 1.7976931348623157E308 to display inifinity.
    document.getElementById("toInfinity").innerHTML = (2E310);
}

function toNegInfinity() {
    //Using a number above 1.7976931348623157E308 to display negative inifinity.
    document.getElementById("toNegInfinity").innerHTML = (-2E310);
}

function trueBoole() {
    //output true
    document.getElementById("trueBoole").innerHTML = (10 > 2);
}

function falseBoole() {
    //output false
    document.getElementById("falseBoole").innerHTML = (10 < 2);
}

function consoleMath() {
    //displays in the browser console
    document.getElementById("consoleMath").innerHTML = console.log(2 + 2);
}

function consoleMathFalse() {
    //displays in the browser console false
    document.getElementById("consoleMathFalse").innerHTML = console.log(10 < 2);
}

function compareTrue() {
    //comparing output true
    document.getElementById("compareTrue").innerHTML = (10 == 10);
}

function compareFalse() {
    //comparing output true
    document.getElementById("compareFalse").innerHTML = (3 == 11);
}

//Tripple equal

function tripEqualTrue() {
    //Creating variables
    X = 10;
    Y = 10;
    //When compared will be true since they have same type and value
    document.getElementById("tripEqualTrue").innerHTML = (X === Y);
}

function tripEqualFalse1() {
    X = 10;
    Y = "20";
    //Will return false because they are different data types and value.
    document.getElementById("tripEqualFalse1").innerHTML = (X === Y);
}

function tripEqualFalse2() {
    X = 10;
    Y = "10"
    //Returns false because they are different data types.
    document.getElementById("tripEqualFalse2").innerHTML = (X === Y);
}

function tripEqualFalse3() {
    X = 10;
    Y = 20;
    //returns false because they are different values
    document.getElementById("tripEqualFalse3").innerHTML = (X === Y);
}

function andOperator() {
    X = 10;
    Y = 20;
    Z = 10;
    // Both have to be true to return true
    document.getElementById("andOperator").innerHTML = (X < Y && X == Z);
}

function orOperator() {
    X = 10;
    Y = 20;
    Z = 10;
    //only one has to be true to return true
    document.getElementById("orOperator").innerHTML = (X > Y || X == Z);
}

function notOperator() {
    X = 10;
    Y = 20;
    Z = 10;
    //would originally return faLse but the not operater returns true
    document.getElementById("notOperator").innerHTML = !(X > Y);
}
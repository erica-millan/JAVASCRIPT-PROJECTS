//Global variable example

var X = 10;
function Add_numbers_1(){
    document.write(20 + X + "<br>");
}
function Add_Numbers_2(){
    document.write(X + 100);
}
Add_numbers_1();
Add_Numbers_2();


//Local Variable example
function Add_numbers_1(){
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_Numbers_2(){
    document.write(X + 100);
}
Add_numbers_1();
Add_Numbers_2();

//Console.log testing console log
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X)
}
function Add_Numbers_2() {
    console.log(X + 100)
}
Add_numbers_1();
Add_Numbers_2();

//Function get date
function get_Date() {
    // if date.hours is less than 6 pm
    if (new Date().getHours() < 18) {
        //output how are you doing today
        document.getElementById("Greeting").innerHTML = "How are you doing today?";
    }
}

//Function get time
function Time_function() {
    //creatung variable time and reply
    var Time = new Date().getHours();
    var Reply;
    //if time is less than 12 and greater than 0 output it's morning
    if (Time < 12 == Time > 0){
        Reply = "It is morning this time!";
    }
    //if time is greater or equal to 12 and less than 18 output it's afternoon
    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else{
        //all other posibilties output it's evening
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//Function less than 18
function get_Num() {
    var Num;
    Num = document.getElementById("num").value;
    // if num is less than 18
    if (Num < 18) {
        //outout num is less than 18
        document.getElementById("Return").innerHTML = "Number is less than 18.";
    }
    //else, num is greater than 18
    else {
        document.getElementById("Return").innerHTML = "Number is greater than 18.";
    }
}

//Functino to get color
function check_Color() {
    var Color;
    Color = document.getElementById("color").value;
    //if color == purple 
    if (Color == "purple") {
        //Output this
        document.getElementById("Return_Color").innerHTML = "Yay, the color is purple!";
    }
    else {
        //Any other inputs will result in this output
        document.getElementById("Return_Color").innerHTML = "Eh, color is not purple! Try again!"
    }
}



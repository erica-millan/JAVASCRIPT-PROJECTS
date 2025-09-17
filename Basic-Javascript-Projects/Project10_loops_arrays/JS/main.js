//Function make_Pies
function make_Pies() {
    //creating a variable for "pies" getting inputted value from user
    pies = document.getElementById("pies").value;
    //Creating a variable X setting it to 0, it will be starting point and
    //Used to increment later on
    var X = 0;
    //Output setting to empty string
    var output = "";
    //Creating a while loop. While X (starting at 0) is less than the value user gives
    while (X < pies) {
        //set variable output equal to string, and keep adding on every loop.
        //output will be equal to string but added each iteration along with a break
        output += "here's your fresh pie! <br>";
        //increment x and go to begining of loop
        X++
    }
    //outputting variable output
    document.getElementById("freshPies").innerHTML = output;
}

//////////////////////////////////////////////////////////////////////

function getLength() {
    var message = document.getElementById("message").value;
    messageLength = message.length;
    document.getElementById("output").innerHTML = "The length of your message is: " + messageLength + " characters long.";
}

//////////////////////////////////////////////////////////////////////

//for loop
//Creating an array instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

//for loop that takes the length of array and iterates through each element of array. 
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//////////////////////////////////////////////////////////////////////

//Array
// function cat_pics() {
//     var Cat_Picture = [];
//     Cat_Picture[0] = "sleeping";
//     Cat_Picture[1] = "playing";
//     Cat_Picture[2] = "eating";
//     Cat_Picture[3] = "purring";
//     document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
// }

// function constant_function() {
//     const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
//     Musical_Instrument.color = "blue";
//     Musical_Instrument.price = "$900";
//     document.getElementById("Constant").innerHTML = "The cost of the " +
//         Musical_Instrument.type + " was " + Musical_Instrument.price;
// }


function constant_function() {
    //creating a constant. the constant can't be deleted or recreated with the same name
    const car = { make: "Toyota", model: "Corolla", year: "2024", color: "silver" };
    car.color = "black";
    car.milage = "200,000";
    //outputting some of the properties of the constant object
    document.getElementById("Constant").innerHTML = "My car is a " + car.color + " " + car.model + " with "
        + car.milage + " miles."
}

//testing let keyword
function let_Test() {
    //testing how all variables output. global scope, function scope
    var X = 85;
    document.getElementById("one").innerHTML = X;
    {
        let X = 33;
        document.getElementById("two").innerHTML = X;
    }
    document.getElementById("three").innerHTML = X;
}

function var_Test() {
    //comparing how the var keyword prints compared to the let keyword
    var X = 85;
    document.getElementById("four").innerHTML = X;
    {
        var X = 33;
        document.getElementById("five").innerHTML = X;
    }
    document.getElementById("six").innerHTML = X;
}


function return_Test() {
    //creating a function with return
    function return_Test1(name) {
        return "Hello " + name;
    }
    document.getElementById("return").innerHTML = return_Test1("John");
}

window.onload = function () {
    //creating an object of type car
    let car = {
        make: "Nissan",
        model: "Altima",
        year: "2020",
        color: "white",
        //creating a method with properties of car object
        description: function () {
            return "My car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
        }
    };
    //sending back car description
    document.getElementById("Car_Object").innerHTML = car.description();
}


// window.onload = function () {


//     let i = 0;
//     let out = "";

//     while (i < 10) {
//         if (i == 5) {
//             break;
//         }
//         out += i + "<br>";
//         i++;
//     }
//     document.getElementById("break").innerHTML = out;



//     let j = 0;
//     let output = "";

//     while (j < 10) {
//         if (j < 5) {
//             output += j + "<br>";
//             j++;
//             continue;
//         }
//         output += "Number: " + j + "<br>";
//         j++;
//     }
//     document.getElementById("continue").innerHTML = output;

// }
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Function that gets triggered from HTML
function Vote_Function() {
    //Creating variables 
    var Age, Can_vote;
    //settign age equal to the value in the element age (whatever is inputted from user)
    Age = document.getElementById("Age").value;
    // settign can_vote to the ternary functionng to check age and if it's over 18 it gives the
    //value to the right of the colon.
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    //sending back "can_vote"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Creating a function Vehicle() as an object constructor. Used any time a an instance of "Vehicle" was created.
//this.vehicle_make would be equivalent to Erik.Vehicle_Make.. it's just a temporarily placeholder until that value actually gets set
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehcile_Year = Year;
    this.Vehicle_Color = Color;
}

//Calls to create the instance of the Vehicle class. Constructure uses the string and values to set the properties.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//This function find the "Keywords and constructor id and puts in the values.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color
        + " -colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehcile_Year;
}


//Creating a function Vehicle() as an object constructor. Used any time a an instance of "Vehicle" was created.
//this.vehicle_make would be equivalent to Erik.Vehicle_Make.. it's just a temporarily placeholder until that value actually gets set
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehcile_Year = Year;
    this.Vehicle_Color = Color;
}

//Calls to create the instance of the Vehicle class. Constructure uses the string and values to set the properties.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//This function find the "Keywords and constructor id and puts in the values.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color
        + " -colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehcile_Year;
}


// constructor for fav Fruits
function Fruit(Fruit, Color, Taste) {
    this.Fruit = Fruit;
    this.Color = Color;
    this.Taste = Taste;
}

// Creating a few favorite fruit objects
var Erica = new Fruit("Apple", "Red", "Sweet");
var Emily = new Fruit("Banana", "Yellow", "Light");
var Andrew = new Fruit("Lemon", "Yellow", "Sour");

// Function to display info about one fruit
function showFavFruit() {
    document.getElementById("New_and_This").innerHTML = "Erica's favorite fruit is a " + Erica.Fruit + "  it's " + Erica.Color + " and " + Erica.Taste;
}


//Nested Function
//Main function getting triggers by event in HTML file
function count_Function() {
    //Updates the HTML element with id "Counting" with the result from Count(). Calls count function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        //Initializes a variable Starting_point with the value 9
        var Starting_point = 9;
        // definiing a function that increments startingpoint by 1.
        function Plus_one() { Starting_point += 1; }
        //calling plus_one() to increment starting point
        Plus_one();
       // returning starting point where it was called by Count(); so it will return 9 + 1
        return Starting_point;
    }
}


    //Nested Function
//Main function getting triggers by event in HTML file
function nested_Function() {
    //Updates the HTML element with id "Counting" with the result from Count(). Calls count function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        //Initializes a variable Starting_point with the value 10
        var Starting_point = 10;
        // definiing a function that increments startingpoint by 1.
        function Plus_one() { Starting_point += 1; }
        //calling plus_one() to increment starting point
        Plus_one();
       // returning starting point where it was called by Count(); so it will return 9 + 1
        return Starting_point;
    }
}



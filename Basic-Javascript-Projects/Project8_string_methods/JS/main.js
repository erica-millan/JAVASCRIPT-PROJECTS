//concatenate
function full_Sentence() {
    //creating sentence chunks
    var one = "Do you want to see me count to three? one, ";
    var two = "two, ";
    var three = "and three!";
    //concatennating sentence
    var whole_Sentence = one.concat(two, three);
    document.getElementById("Concatenate").innerHTML = whole_Sentence;
}

//slice method
function slice_Method() {
    var Sentence = "Click here to slice!";
    //slicing from 14-20 of the above variable
    var Section = Sentence.slice(14, 20);
    //outputting slice sending back to index.html
    document.getElementById("Slice").innerHTML = Section;
}

//Function to upper
function to_Upper() {
    //creating variable for text
    var text = document.getElementById("text_to_Upper").value;
    //new vairable to set to upper
    var text_to_upper = text.toUpperCase();
    //sending upper case string back
    document.getElementById("uppercased").innerHTML = text_to_upper;
}

//function to search
function search() {
    //creating variable for text to search through
    var sentence = "Click here to search for tigers in this sentence!";
    var find = sentence.search("tigers");
    //sending upper case string back
    document.getElementById("return_Search").innerHTML = find;
}

//Num -> string
function string_Method(){
    var x = 500;
    //setting x to string and passing it back
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method(){
    var x = 15269.120236489;
    //getting precision for: 15269.120236489 7 places
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
}

function fixed_Method(){
    var x = 15269.120236489;
    //getting fixed 2 decimal places for: 15269.120236489 
    document.getElementById("Precision").innerHTML = x.toFixed(2);
}

function value_of_Method(){
    //creates number object
    var numObj = new Number(46);
    //.valueOf() returns the primitive value of 46 number object
    var primValue = numObj.valueOf();
    //getting value of string 46
    document.getElementById("valueOf").innerHTML = primValue + 10;
}
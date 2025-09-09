//My First Function for button

// function My_First_Function(){
//     var str = "This is the button text!";
//     var str2 ="and this is more text"
//     document.getElementById("Button_Text").innerHTML = str + str2;
// }

//My Function that uses += operator

    function myFunction() {
        //Creating a variable with the string "I am learning"
        var sentence = "I am learning";
        //Adding to that string and setting the whole thing equal to "sentence" variable
        sentence += " a lot from this book!";
        //Looks for "Concatenate" in the HTML file and replaces it with what is included in the "sentence" variable.
        document.getElementById("Concatenate").innerHTML = sentence;
    }




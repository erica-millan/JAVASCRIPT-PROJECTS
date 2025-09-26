//triggered when "Place order" button is clicked
//Defines the "getReceipt" function

function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt


    //initializing text1 ( the string receipt). The text1 will hold the HTML content for receipt
    var text1 = "<h3>You Ordered:</h3>";
    //runningTotal tracks the total cost of order
    var runningTotal = 0;
    //sizeTotal will store the price of the selected pizza from it's size
    var sizeTotal = 0;
    //getting all of the radio buttons that have the class "size".
    //it's going to loop through each radio button finding 
    // which one is selected and store in selected size
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        //if one of the buttons is checked 
        if (sizeArray[i].checked) {
            //it's going to store its value in selectedSize
            var selectedSize = sizeArray[i].value;
            //and add that value to text1 (the receipt string)
            text1 = text1 + selectedSize + "<br>";
        }
    }
    //grabbing price based on it's selected size. setting that price in variable sizeTotal.
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //updating the overall total basedon the base price
    runningTotal = sizeTotal;
    //outting info to the browser consol
    console.log(selectedSize + " $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    //calling get topping with the price based on size.
    //running total will have the price
    //text1 contains the receipt string and size
    getTopping(runningTotal, text1);
};
//defines function gettopping has 2 arguments running total and text1.
//function layers toppings, adds upj the costs and comletes the receipt.
//this function will get the current price and the reciept string from getreceipt.
function getTopping(runningTotal, text1) {
    //track num of toppings added
    var toppingCount = 0;
    //array stores the names of selected toppings
    var selectedTopping = [];
    //gets the checkboxes with class "toppings"
    var toppingArray = document.getElementsByClassName("toppings");
    //for the length of toppings, iterate through each topping and find the ones t hat are checked. 
    for (var j = 0; j < toppingArray.length; j++) {
        //if toping is checked
        if (toppingArray[j].checked) {
            //add to selected topping
            selectedTopping.push(toppingArray[j].value);
            //outputs log to browser
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            //adding topping to text1 reciept
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //calculating the topping cost
    //gettign the length of topping numbers
    var toppingCount = selectedTopping.length;
    //checking first to see if the topping count is greater than 1
    if (toppingCount > 1) {
        //first topping is free
        toppingTotal = (toppingCount - 1);
    } else {
        //if there's only one topping it's free
        toppingTotal = 0;
    }
    //adds topping cost to the total
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + (toppingCount - 1) + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");

//displays reciept
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}



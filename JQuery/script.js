
//"$" symbol is an identifyer used to access JQuery
//after the dollar symbol in the parenthesis is the selector used to find what element should be targetted.
//In this case the selector is document which targets the entire HTML document  
//ready event specifies that the document should finish floating and be ready 
//before the code is executed.
//function keyword is passed in as an argument to tell the browser to run the code that 
// will be between the curly braces

$(document).ready(function () {
    //will use JQuiery.animate method to perform a custom animation
    //shineLoop function uses the chaining techniaque to 
    //utilize multiple animate even methods in the same function
    function shineLoop() {
        //targetting all html elements that have the css class shine
        //using the animate method to modify the CSS property backgroundPositionX 
        //backgroundPositionX propery sets the position of the background image on the "x" axis.. horizontally
        //moving it 1600 px along the x axis. 3,000 represents the duration of the animation in milliseconds (3 seconds)


        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            //calling the animate method again is called chaining. in JQuery, chaining lets you use multiple event methods 
            //one after another without the need to create a new function for each. 
            //by chaining the animate methods we can move the background images position in the 
            //other direction by using -800 pixels. 
            .animate({ backgroundPositionX: '-800px' }, 3000)
    };
    //setInterval will repeat the shineLoop function and 0
    //sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);
 //Shrinks header size when the document is scrolled down by 50 pixels
 //use the document selector again since we want an action to occur when something in the document is triggered
 //on method is used to add one or more event handler functions   
 //scroll argument is the event that will trigger the action. when user scrolls on the page function will be called
 $(document).on("scroll", function () {
    //conditional statement to control whether to add or remove the header scrolled class
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    //Triggers the images to slide down to show each title one after the other
    //when the user's mouseenters the div area with the #classicCars ID
    //used mouse enter event with the on method meaning it'd triggered when users mouse enters any
    //html element with the classic cars ID. 
    //We then use the colon to define it as an object literal.  
    //function is an annonomouse function aka callback function. 
    //using JQuery we targetted each title ID. We uzsed the show event handler and apply time to each one.
    //shows each title one after the other when the user hovbers their mouse over the div element 
    //with the classic cars ID.
    $("#classicCars").on({
        //triggers the images to slide down one after the other
        //when the user's mouse enters the div area with the
        //#classicCars ID
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        }
    });



    //Triggers the images to slide up and hide each title one after the other
    //when the user's mouse leaves the div area with the #classicCars ID
    $("#classicCars").on({
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking each element's sibling 
    //so they don't all display when one question is clicked
    $('div.question').on('click', function () {
        $(this).next()
            .slideToggle('slow')
            .siblings('div.answer');
    });

})
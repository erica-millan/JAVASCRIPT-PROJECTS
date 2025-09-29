function getMsg() {

    //STEP 1: Set up the xml http request object.
    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name to display to user after 
    //request has been made

    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value one request
    //has been recieved.

    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
            inputVal + " for signing up!";
    }
    //STEP 2: Prepare the type of request and what to requeszt from the server
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3: Defines the Ajax response callback method that
    //establishes whether the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    //STEP 4: Send the request
    ajaxRequest.send();
}
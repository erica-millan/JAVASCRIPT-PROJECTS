//triggered when a user clicks on one of the list elements

function displayType(character) {
    //gets the value of the custom attribute "data-character-type" from the clicked element.
   //stores it in "character type"
    var characterType = character.getAttribute("data-character-type");
    //shows an alert with the value stored in the character type variable from above
    //and the inner text from the <li> element 
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}

function displayAnimal(animal){
    //.getAttribute() is a method in JavaScript used to retrieve the value 
    // of a specified attribute from an HTML element. Using it to get the value
    //inside of custom attribute "data-animal-type". storing it inside 
    //animalType 
    var animalType = animal.getAttribute("data-animal-type");
    // outputting alert that has the animal and taking the li argument passed through 
    // .innerHTML which will be the value of text in the tag
    alert(animalType + " is found in the " + animal.innerHTML);
}





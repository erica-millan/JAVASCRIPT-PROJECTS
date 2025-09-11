//Dictionary "animal" contained in the mydictionary function

function my_Dictionary() {
    var Animal = {
        //All words to the left of the colon are the keys all words all words to the right are the values.
        Species: "Dog",
        Color: "Black",
        Breed: "Lab",
        Age: "5",
        Sound: "Bark!"
    }
    //looking for the id "dictionary" in html.index file and replacing it with animal.sound
    document.getElementById("dictionary").innerHTML = Animal.Sound;
}

//Dictionary "car" contained in the mydictionary2 function
function my_Dictionary_2(){
    var Car ={
        Make: "Nissan",
        Model: "Maxima",
        Color: "Black",
        Year: "2025"
    }
    //since I am deleting car.color it will retur undefined
    delete Car.Color;
    document.getElementById("dictionary2").innerHTML = Car.Color;
}
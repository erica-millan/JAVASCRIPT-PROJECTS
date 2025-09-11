function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Lab",
        Age: "5",
        Sound: "Bark!"
    }
    document.getElementById("dictionary").innerHTML = Animal.Sound;
}


function my_Dictionary_2(){
    var Car ={
        Make: "Nissan",
        Model: "Maxima",
        Color: "Black",
        Year: "2025"
    }
    delete Car.Color;
    document.getElementById("dictionary2").innerHTML = Car.Color;
}
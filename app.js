

//  TASK 1

var itemsArray = [
    {
        name: "juice",
        price: "50",
        quantity: "3",
    },
    {
        name: "cookie",
        price: "30",
        quantity: "9",
    },
    {
        name: "shirt",
        price: "880",
        quantity: "1",
    },
    {
        name: "pen",
        price: "100",
        quantity: "2",
    }
]

var calculate1 = (itemsArray[0].price * itemsArray[0].quantity);
var calculate2 = (itemsArray[1].price * itemsArray[0].quantity);
var calculate3 = (itemsArray[2].price * itemsArray[0].quantity);
var calculate4 = (itemsArray[3].price * itemsArray[0].quantity);

var allCalculate = (calculate1 + calculate2 + calculate3 + calculate4);

console.log(calculate1)
console.log(calculate2)
console.log(calculate3)
console.log(calculate4)
console.log(allCalculate)

// TASK 2

var data = {

    name: "Ali Aftab Sheikh",
    email: "aliaftabsheikh1@gmail.com",
    password: "12345",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",

}
if ("age" in data && "country" in data == true) {
    console.log("Age and country exist in data")
} else {
    ("Age and data Not exist")
}

// Task 3

function User(name, id, Profile, Photos) {
    this.name = name;
    this.id = id;
    this.Profile = Profile;
    this.Photos = Photos;
}

var User1 = new User("Ali", 19400, "None", 1400)
var User2 = new User("Hassan", 19401, "None", 1100)
var User3 = new User("Hamza", 19402, "None", 1600)


console.log(User1, User2, User3)


// Task 4


function Area(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function myData() {
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    if ((personName.length && address.length && education.length && profession.length) == 0) {
        console.log("Please fill the correct fields");
    } else {
        var gender1 = document.getElementById("male");
        var gender2 = document.getElementById("female");

        if (gender1.checked) {
            var a = "male";
        } else if (gender2.checked) {
            var a = "female";
        }

        const myArea = new Area(personName, a, address, education, profession);
        console.log(myArea);
    }
}

//JS Objects, JSON, and ES6 Updates

let personArray = ["John", 16, true];
console.log(personArray);

let personObject = {
    name: "John",
    age: 16,
    isRegistered: true
}

console.log(personObject);

let student = {
    firstName: "John",
    middleName: "Smith",
    lastName: "Doe",
    year: 3,
    section: "A",
    address: {
        street: "Magellan Street",
        houseNo:"750",
        brgy: "Scared Heart",
        city: "Quezon City",
        province: "Metro Manila",
        country: "Philippines"
    },
    contact: [{phone: "0946824768942", email: "js@ua.edu.ph"}]
}

console.log(student);

// Accessing Object Property Value using Dot Notation

console.log(student.firstName); //Output: John
console.log(student.address.city); //Output: Quezon City
console.log(student.contact[0].email); // Output: js@ua.edu.ph

// Object Constrainer
// "this" and "new" keyword
// this keyword embraces the object property
// new keyword pertains to the duplication of the constructor

function Pet(name, breed, age, color,type){
    this.name = name,
    this.breed = breed,
    this.age = age,
    this.color = color,
    this.animalType = type,
    this.talk = function(){
        if(this.animalType == "Dog"){
            console.log("Woof woof!");
        }else if(this.animalType == "Bird"){
            console.log("Tweet tweet!")
        }
    }
}

let bruno = new Pet("Bruno", "Labrador", 4, "Brown","Dog");
console.log(bruno);

let lala = new Pet("Lala", "Golden Retriever", 2, "Goldern Brown","Dog");
console.log(lala);

let rio = new Pet("Rio", "Parrot", 1, "Red", "Bird");
console.log(rio);
console.log(rio.color);
console.log(rio)

console.log(bruno.talk());
console.log(rio.talk());

// ES6 Updates
// Template Literalvs Concatenation
// ${value} and backticks(``)

let name = "Jane";
console.log("My name is " + name + "!");

console.log(`My name is ${name}!`);

console.log(`I have a pet named ${bruno.name} and he is ${bruno.age}.`);
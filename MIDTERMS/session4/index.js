
let grades = [90, 91, 88, 100];
console.log(grades);

let mixedArray = ["John", 16, true, null];
console.log(mixedArray);

let students = ["Peter", "Jane", "Bob"];
console.log(students[0]);
console.log(students[2]);

students[0] = "John";
console.log(students);

students[3] = "Andrew";
console.log(students);

students[students.length] = "Mark";
console.log(students);

students[students.length - 1]   =    "Al";
console.log(students);

for(let x = 0; x < students.length; x++){
    console.log(students[x]);
}

let friends = [];

function showFriends(){
    console.log(friends);
}

function addFriend(name){
    friends[friends.length] = name.toUpperCase();

    for(let x = 0; x <= friends.length; x++){
        if(friends[x] == name.toUpperCase()){
            console.log("You are already friends whith "+ name);
        }else{
            friends[friends/length] = name.toUpperCase();
            console.log("Friend request sent to " + name);
            break;
        }
    }
}
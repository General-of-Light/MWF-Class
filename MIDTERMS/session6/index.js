// Insert one data to MongoDb

db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact:{
        phone: "93246332859",
        email: "janedoe@ua.edu.ph"
    },
    courses:  ["CSS", "JS", "PYTHON"],
    department: "none"
});

// Insert multiple records in momgodb

db.users.insertMany([{
    firstName: "Stephen",
    lastName: "Hawkings",
    age: 76,
    contact:{
        phone: "93246332859",
        email: "stephenhawkings@ua.edu.ph"
    },
    courses:  ["PHP", "REAX", "PYTHON"],
    department: "none"
},{
    firstName: "Neil",
    lastName: "Armstrong",
    age: 82,
    contact:{
        phone: "93246332859",
        email: "neilarmstrong@ua.edu.ph"
    },
    courses:  ["REACT", "LARAVEL", "SASS"],
    department: "none"
}]);


// Selecting records in mongoDB
db.users.find();

// Selecting records in mongoDB with Criteria
db.users.find({firstName: "Stephen"});

db.users.find({department: "none", age: 82});

// Updating a record in mongoDB
db.USERS.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
contact:{
    phone: "9826385289",
    email: "test@ua.edu.ph"
},
courses: [],
department: "none"
});



db.USERS.updateOne({firstName: "Test"},{
    $set:{
        firstName: "Bill",
    lastName: "Gates",
    age: 65,
    contact:{
        phone: "9092357920385",
        email: "billgates@ua.edu.ph"
    },
    courses: ["PHP", "LARAVEL", "HTML"],
    department: "Operations",
    status: "Active"

    }
    
});

// update multiple records
db.users.updateMany({department: "none"},
    {
        $set: {
            department: "HR"
        }
    }
)

// Find records with comparison operators
db.users.find({age:{$gt : 50}});
db.users.find({age:{$lt : 50}});
// gt, lt, gte, lte
const express = require ("express");
const app = express();

const port = 4000;

//  Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// REQUEST
// GET METHOD
app.get("/", (req, res) => {
    res.send("Hello World");
})

let users = [];

app.get("/hello", (req, res) => {
    res.send("Hello from /hello endpoint.");
})

app.post("/hello", (req, res) => {
    res.send('Hello $(req.body.firstName)$(req.body.lastName)|');
})

app.post("/register", (req, res) => {
    if(req.body.username !== "" && req.body.password !== ""){
        users.push(req.body);
        res.send('User ${req.body.user name} is now registered!' );
    }else{
        res.send("Please enter correct unsername or password");
    }  
})

app.delete("/delete-user", (req, res) =>{
    if(users.length >0){
        users.pop();
        res.send("A user was deleted.");
    }else{
        res.send("There is no registered user.");
    }
})

app.get("/get-users", (req, res) => {
    res.send({users});
})

app.listen(port, () => console.log("Server is running at port number " + port));
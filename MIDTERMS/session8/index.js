const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

// Mongoose setup and connection
mongoose.connect("mongodb+srv://admin:admin123@uadatabase.61jpu.mongodb.net/try?retryWrites=true&w=majority&appName=UADatabase");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to mongoDB"));

// Schema
const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})

// Model

const Task = mongoose.model("Task", taskSchema);

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Operations
// Create a task
app.post("/tasks", (req, res) => {
    Task.find({name: req.body.name}).then((result, err)=>{
        if(result !== null && result.name == req.body.name){
            return res.send("Duplicate Task Found");
        }else{
            let newTask = new Task({
                name: req.body.name
            })

            newTask.save().then((savedTask, savedErr) => {
                if(savedErr){
                    return console.error(savedErr);
                }else{
                    return res.send({
                        code: 200,
                        message: "Task Created!",
                        data: savedTask
                    })
                }
            })
        }

    })
})

// Get all tasks in the DB
app.get("/tasks", (req, res) => {
    Task.find({}).then((result, err) =>{
        if(err){
            return res.send("ERROR!");
        }else{
            return res.send({
                code: 200,
                message: "LIST OF ALL TASKS",
                result: result
            });
        }
    })
})

// Get specific task using its ID
// :taskId -> wild card
app.get("/tasks/delete/:taskId", (req, res) => {
    Task.findById(req.params.bookId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            })
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find task with the given ID."
                })
            }else{
                res.send({
                    message: "ONE TASK RETRIEVED!",
                    result: result
                })
            }
        }
    })

})

// Delete a task
app.delete("/tasks/delete/:taskId", (req, res) => {
    Task.findByIdAndDelete(req.params.taskId)
        .then((result) => {
            if (result == null) {
                return res.send({
                    message: "Cannot find task with the given ID."
                })
            } else {
                return res.send({
                    message: "Task Deleted.",
                    result: result
                })
            }
        })
        .catch((err) => {
            return res.send({
                message: "Server Error.",
                error: err
            })
        })
})

// Find all pending tasks
app.get("/tasks/pending", (req, res) => {
    Task.find({ status: "pending" }).then((result) => {
        return res.send({
            code: 200,
            message: "Pending Tasks List",
            result: result
        })
    }).catch((err) => {
        return res.send({
            message: "Server Error.",
            error: err
        })
    })
})

//Find all completed tasks
app.get("/tasks/completed", (req, res) => {
    Task.find({ status: "completed" }).then((result) => {
        return res.send({
            code: 200,
            message: "Completed tasks list",
            result: result
        })
    }).catch((err) => {
        return res.send({
            message: "Server Error.",
            error: err
        })
    })
})



app.listen(port, () => console.log(`Server is now running at port ${port}.`));
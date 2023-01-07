const express = require("express");
require("./database/db");
const student = require("./models/student");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const fetchResult = await student.find();
        res.send(fetchResult);
    } catch (error) {
        throw new Error(error)
    }
})
// ------ Getting data using phone number --------
app.get("/student/:phone", async (req, res) => {
    try {
        const userPhone = req.params.phone;
        const fetchResult = await student.find({ phone: userPhone });
        res.send(fetchResult);
    } catch (error) {
        console.log(error)
    }
})
app.post("/students", async (req, res) => {
    try {
        let data = req.body;
        const user = new student(data);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

app.patch("/students/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        const fetchResult = await student.updateOne({ _id: id }, { $set: data });
        res.send(fetchResult);

    } catch (error) {
        console.log(error);
    }
})
app.delete("/students/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const fetchResult = await student.deleteOne({ _id: id });
        res.send(fetchResult);
    } catch (error) {
        console.log(error);
    }
})
app.listen(port, () => {
    console.log("server is runninr at port : ", port);
});


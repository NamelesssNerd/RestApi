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
        console.log(userPhone)
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
        res.send("Data Saved Sucessfully");
    } catch (error) {
        console.log(error);
    }
})
app.patch("/update", async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        const fetchResult = await student.updateOne({ _id: '63b87049f27bc66aa9464db1' }, { $set: { data } });
        res.send("Update sucessfully");

    } catch (error) {
        console.log(error);
    }
})
app.delete("/delete", async (req, res) => {
    try {
        let data = req.body;
        console.log(data._id);
        const fetchResult = await student.deleteOne({ _id: data._id });
        res.send("Data Deleted Sucessfully");
    } catch (error) {
        console.log(error);
    }
})
app.listen(port, () => {
    console.log("server is runninr at port : ", port);
});


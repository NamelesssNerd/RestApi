const express = require("express");
require("./database/db");
const student = require("./models/student");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Database connection successfull");
})
app.post("/students", (req, res) => {
    try {
        let data = req.body;
        const user = new student(data);
        user.save();
    } catch (error) {
        console.log(error);
    }
    res.send("Data Gets in request");
})
app.listen(port, () => {
    console.log("server is runninr at port : ", port);
});


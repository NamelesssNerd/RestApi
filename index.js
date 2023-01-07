const express = require("express");
require("./database/db");
const student = require("./models/student");
const studentRouter = require("./routers/student");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);
app.listen(port, () => {
    console.log("server is runninr at port : ", port);
});


const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/RestApi").then(() => {
    console.log("Database Cennection sucessfully");
}).catch((error) => {
    console.log(error);
})
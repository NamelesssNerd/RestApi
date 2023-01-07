const express = require("express");
const router = new express.Router();
const student = require("../models/student");

router.get("/", async (req, res) => {
    try {
        const fetchResult = await student.find();
        res.send(fetchResult);
    } catch (error) {
        throw new Error(error)
    }
})
router.get("/student/:phone", async (req, res) => {
    try {
        const userPhone = req.params.phone;
        const fetchResult = await student.find({ phone: userPhone });
        res.send(fetchResult);
    } catch (error) {
        console.log(error)
    }
})
router.post("/students", async (req, res) => {
    try {
        let data = req.body;
        const user = new student(data);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})
router.patch("/students/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        const fetchResult = await student.updateOne({ _id: id }, { $set: data });
        res.send(fetchResult);

    } catch (error) {
        console.log(error);
    }
})
router.delete("/students/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const fetchResult = await student.deleteOne({ _id: id });
        res.send(fetchResult);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
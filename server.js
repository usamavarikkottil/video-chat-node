const express = require('express');
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi! Iam ready!");
});

app.post("/", (req, res) => {
    res.send("Hi! Post okay...!");
});


const port = process.env.port || 5000
app.listen(port, () => console.log("server started...."));

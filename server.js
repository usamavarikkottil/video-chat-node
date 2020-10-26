const express = require('express');
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4} = require("uuid");

// require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect(`/${uuidV4()}`);
});

app.get("/:room", (req, res ) => {
    res.render("room", {roomId: req.params.room});
})


const port = process.env.port || 5000
app.listen(port, () => console.log("server started...."));

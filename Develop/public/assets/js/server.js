const express = require("express");
const path = require("path");
const fs = require('fs');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Index route
app.get("/", (require, response) => {
    response.sendFile(path.join(__dirname, "../../index.html"));
});

// Notes route
app.get("/notes", (require, response) => {
    response.sendFile(path.join(__dirname, "../../notes.html"));
});

// JSon Notes route
app.get("/api/notes", (require, response) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        console.log(data)
        return response.json(data)
    })


});




app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});
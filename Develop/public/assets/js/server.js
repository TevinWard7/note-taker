const express = require("express");
const path = require("path");
const fs = require('fs');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Index route
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "../../index.html"));
});

// Notes route
app.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "../../notes.html"));
});

// JSon Notes route
app.get("/api/notes", (request, response) => {

    fs.readFile("db.json", "utf-8", (err, data) => {
        console.log(data)
        return response.json(data)
    })
});

app.post("/api/notes", (request, response) => {

    const newNote = JSON.stringify(request.body);

    fs.writeFile('db.json', newNote, () => { });
});

app.delete("/api/notes/:id", (request, response) => {
    const selectedNote = request.params.id;
});



app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});
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

// Json Notes route
app.get("/api/notes", (request, response) => {

    fs.readFile("db.json", (err, data) => {
        let parsedData = JSON.parse(data);
        console.log(parsedData)
        return response.json(parsedData)
    })
});

app.post("/api/notes", (request, response) => {

    const newNote = JSON.stringify(request.body);

    fs.appendFile('db.json', newNote, () => {

    });
    response.redirect("/");
});

app.delete("/api/notes/:id", (request, response) => {
    const selectedNote = request.params.id;
});



app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});
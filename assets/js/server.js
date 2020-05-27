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
        let json = JSON.parse(data);
        console.log(json);
        return response.json(json);
    })
});

app.post("/api/notes", (request, response) => {

    const data = fs.readFileSync("db.json");
    const json = JSON.parse(data);

    newData = request.body;
    json.push(newData);

    fs.writeFileSync("db.json", JSON.stringify(json));
    // response.redirect("/");
});

app.delete("/api/notes/:id", (request, response) => {
    const selectedNote = request.params.id;
});



app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});
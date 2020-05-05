const express = require("express");
const path = require("path");


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.get("/notes", (require, response) => {
    response.sendFile(path.join(__dirname, "../../notes.html"));
});

app.get("*", (require, response) => {
    response.sendFile(path.join(__dirname, "../../index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});
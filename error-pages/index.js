const express = require('express');
const app = express();

// serve static files such as images, CSS files and JavaScript files
app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/home.html");
});

// IMPORTANT: always leave this code at the bottom
// config error-handling pages
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/views/404.html");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
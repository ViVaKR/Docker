const express = require("express");

// Constants
const PORT = 7777;
const HOST = '0.0.0.0';
const app = express();

app.get("/", (req, res) => {
    res.send("I am a endpoint");
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
})



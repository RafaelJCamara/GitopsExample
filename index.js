const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Argo!");
});

app.listen(3000, ()=>{
    console.log("listening...");
});
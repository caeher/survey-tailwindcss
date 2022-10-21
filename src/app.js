import express from "express";


const app = express();


app.get('/', (red, res) => {
    res.send("Hello World");
});


export default app;
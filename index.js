import express from "express";
import { validateUserData, errorHandler } from "./validateUserData.js";

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get("/home", (req, res) => {
    res.status(200).send("Hello world");
})

app.post("/register", validateUserData, (req, res) => {
    res.status(200).json({
        "message": "Register Successfully",
        "user": req.body
    })
})

app.use(errorHandler)


// to start the server
app.listen(4242, () => {
    console.log("Server started at port 4242");
})
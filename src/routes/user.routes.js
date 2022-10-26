import { Router } from "express";
import User from "../models/user.model";


const userRouter = Router();

userRouter.get("", (req, res) => {
    res.send("Usuarios");
});
userRouter.get("/create", (req, res) => {
    let newUser = new User({
        name: "Cristian",
        email: "eh18010@ues.edu.sv",
        password: "password"
    })

    newUser.save();
    res.send("Hello");
    // res.redirect('/user');
});
userRouter.post("", (req, res) => {
    const {name, email, password, password_repeat} = req.body;


});

export default userRouter;
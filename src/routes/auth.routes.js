import { Router } from "express";

const authRouter = Router();

authRouter.get("/login", (req, res) => {
    res.render("auth/login", {
        
    });
});

authRouter.get("/register", (req, res) => {
    res.render("auth/register", {
        
    });
});

authRouter.get("/password-reset", (req, res) => {
    res.render("auth/reset-password", {
        
    });
});

authRouter.post("/login", (req, res) => {
    const {email, password} = req.body;
});

authRouter.post("/register", (req, res) => {
    const {name, email, password, password_repeat} = req.body;
});


export default authRouter;
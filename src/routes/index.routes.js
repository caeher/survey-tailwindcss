import {Router} from "express";
// import * as style from "../../dist/assets/css/app.css";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
const router = Router();


router.use("/auth", authRouter);

router.get("/", (req, res) => {
    res.render("index", {
        data: ""     
    });
});



router.use("/user", userRouter);

// router.get("*", (req, res) => {
//     res.redirect("/");
// });

export default router;
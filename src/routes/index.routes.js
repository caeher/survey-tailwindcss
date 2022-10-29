import {application, Router} from "express";
// import * as style from "../../dist/assets/css/app.css";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import respuestasRouter from "./respuestas";
import preguntasRouter from "./preguntas.routes";
const router = Router();


router.use("/auth", authRouter);

router.get("/", (req, res) => {
    res.render("index", {
        data: ""     
    });
});



router.use("/user", userRouter);
router.use("/respuestas", respuestasRouter);
router.use("/preguntas", preguntasRouter);


export default router;
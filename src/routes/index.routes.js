import {Router} from "express";
// import * as style from "../../dist/assets/css/app.css";

const router = Router();


router.get("/", (req, res) => {
    res.render("index", {
        data: ""     
    });
});




// router.get("*", (req, res) => {
//     res.redirect("/");
// });

export default router;
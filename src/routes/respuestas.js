import { Router } from "express";
import Respuesta from "../models/respuestas.model";
import {respuestasSeed} from "../utils/respuestas.seed";


const respuestasRouter = Router();


respuestasRouter.get("/seed", (req, res) => {
    const respuesta = new Respuesta(respuestasSeed);
    respuesta.save();
    res.send("Generando respuestas...(recargar 5 veces) luego ir a http://localhost:4000/");
});





respuestasRouter.get("/", async (req, res) => {
    
    let data = await Respuesta.find().lean();

    res.render("listarRespuestas.hbs", {
        data
    });
});


respuestasRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    const data = await Respuesta.find({_id: id}).lean();
    // console.log(data);
    res.render("verRespuestas", {
        data: data[0]
    });
});


export default respuestasRouter;
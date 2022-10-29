import {Router} from "express";
import Pregunta from "../models/preguntas.model";
const router = Router();

router.get("/", async (req, res) => {
    const datos = await Pregunta.find().lean();
    
    res.render("preguntas/index", {
        datos
    });
});

router.get("/crear", (req, res) => {
    
    res.render("preguntas/crear", {});
});
router.get("/:id", (req, res) => {

});

router.post("/", (req, res) => {
    const {title, tipoR} = req.body;
    let respuesta = req.body.respuesta;

    // Si el tipoR es de opcion unica/multiple se asigna los valores de los input[type="text"]
    if(tipoR == "opcion-unica" || tipoR == "opcion-multiple") {
        respuesta = req.body.respuestaText;
    }
    if(respuesta == undefined) {
        return res.end("Invalid request");
    }
    const nuevaPregunta = new Pregunta({
        title: title,
        tipoR: tipoR,
        respuestas: respuesta
    });
    nuevaPregunta.save();
    res.json(nuevaPregunta);
});


router.get("/edit/:id", async (req, res) => {
    const dato = await Pregunta.findById({_id: req.params.id}).lean();
    console.log(dato);
    res.render("preguntas/editar", {
        dato
    });
});

export default router;
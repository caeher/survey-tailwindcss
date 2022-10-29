import { Schema, model } from "mongoose";

const preguntasSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tipoR: {
        type: String,
        required: true
    },
    respuestas: {
        type: [String],
        default: []
    }
});
const Pregunta = model("Pregunta", preguntasSchema);
export default Pregunta;


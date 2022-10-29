import { Schema, model } from "mongoose";
// import Pregunta from "./preguntas.model";

let seccionesSchema = new Schema(
    {
        secciones: {
            id: String,
            name: String,
            preguntas: {
                type: [
                    {
                        quiz: String,
                        answers: {
                            type: [String],
                            required: false
                        }
                    }
                ],
                required: false
            }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
//
const Seccion = model("Seccion", seccionesSchema);
export default Seccion;
import { Schema, model } from "mongoose";
import Seccion from "./secciones.model";

let respuestaSchema = new Schema(
    {
        
            id: String,
            name: String,
            secciones: {
                type: [
                    {
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
                        }
                    }
                ],
                default: undefined
            }
        },
    {
        timestamps: true,
        versionKey: false
    }
);
//


const Respuesta = model("Respuesta", respuestaSchema);
export default Respuesta;
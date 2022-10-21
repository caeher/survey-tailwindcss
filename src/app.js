import express from "express";
import {engine} from "express-handlebars";
import path from "path";
import router from "./routes/index.routes";

global.appRoot = path.resolve(__dirname);

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: 'main',
    partialsDir: [
        path.join(app.get("views"), 'partials')
    ],
    helpers: {

    }
}));

app.set("view engine", '.hbs');

app.use(express.json());

app.use(express.static(path.join(global.appRoot, "../dist")));
app.use(router);

export default app;
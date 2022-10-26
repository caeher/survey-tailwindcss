import express from "express";
import {engine} from "express-handlebars";
import path from "path";
import router from "./routes/index.routes";
import morgan from "morgan";

global.appRoot = path.resolve(__dirname);

const app = express();

morgan.token('host', (req, res) => {
    return req.hostname;
});

// Morgan configuration: https://expressjs.com/en/resources/middleware/morgan.html
app.use(morgan(":method / :host / :status / :res[content-length] / :response-time ms"));

// Handlebard configuration: 
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
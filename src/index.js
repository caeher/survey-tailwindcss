import app from "./app";
import "./database";
const port = 3000;


app.listen(port,  () => {
    console.log(`Listening on port ${port} -> http://localhost:${port}`);
});
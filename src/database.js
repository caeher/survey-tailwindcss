import {connect} from 'mongoose';
import path from 'path';
(async () => {
    try {
        const db = await connect("mongodb://localhost:27017/todolist");
        console.log(`DB connected to -> mongodb://localhost:27017/${db.connection.name}`);
    }catch(error) {
        console.log(error);
    }
})();

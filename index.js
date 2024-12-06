import express from "express";

import connectDb from "./src/db/database.js";

import routes from "./src/db/routes.js";

const db = await connectDb(process.env.MONGODB_URI);

export function getDatabase() {
    return db;
}

const app = express();
app.use(express.static("uploads"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);

app.listen(3000, () => {
    console.log("API lançada com sucesso.");
});

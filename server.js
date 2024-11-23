import express from "express";

import connectDb from "./src/db/database.js";

import routes from "./src/db/routes.js";

const db = await connectDb(process.env.DATABASE);

export function getDatabase() {
    return db;
}

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("API lançada com sucesso.");
});

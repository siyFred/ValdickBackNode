import express from "express";

import connectDb from "./src/db/database.js";

import routes from "./src/db/routes.js";

const db = await connectDb(process.env.MONGODB_URI);

export function getDatabase() {
    return db;
}

const app = express();
app.use(express.static("uploads"));

routes(app);

app.listen(3000, () => {
    console.log("API lançada com sucesso.");
});

import { MongoClient } from "mongodb";

export default async function connectDb(db) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(db);
        console.log("Conectando ao banco de dados...");
        await mongoClient.connect();
        console.log("Conectado ao banco de dados com sucesso.");
        return mongoClient;
    } catch (erro) {
        console.error("ERRO: Falha ao conectar ao banco de dados.", erro);
        process.exit();
    }
}
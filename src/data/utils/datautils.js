import express from "express"

import { getCarsData, getBrandsData } from "../data.js";
import { getDatabase } from "../../../server.js";

export async function searchCarDataById(req) {
    const { id } = req.params;
    const car = (await getCarsData()).find(b => b.id === id);
    return car;
}

export async function searchBrandDataById(req) {
    const { id } = req.params;
    const brand = (await getBrandsData()).find(b => b.id === id);
    return brand;
}

export async function create(post, type) { // type = string nome da collection
    const db = await getDatabase();
    const mydb = (await db).db("carrus-di-luxu");
    const collection = mydb.collection(type);
    return collection.insertOne(post);
}
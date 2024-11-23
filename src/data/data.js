import express from "express";

import { getDatabase } from "../../server.js";
import { searchCarDataById, searchBrandDataById } from "./utils/datautils.js";

//
// controller
//

export async function listCars(req, res) {
    res.status(200).json(await getCarsData());
}

export async function listBrands(req, res) {
    res.status(200).json(await getBrandsData());
}

export async function listCar(req, res) {
    res.status(200).json(await searchCarDataById(req));
}

export async function listBrand(req, res) {
    res.status(200).json(await searchBrandDataById(req));
}

//
// data getter
//

export async function getCarsData() {
    const db = await getDatabase();
    const mydb = (await db).db("carrus-di-luxu");
    const collection = mydb.collection("cars");
    return collection.find().toArray();
}

export async function getBrandsData() {
    const db = await getDatabase();
    const mydb = (await db).db("carrus-di-luxu");
    const collection = mydb.collection("brands");
    return collection.find().toArray();
}

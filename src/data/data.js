import express from "express";
import fs from "fs";

import { getDatabase } from "../../server.js";
import { searchCarDataById, searchBrandDataById, create } from "./utils/datautils.js";

//
// controller
//

// GET

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

// POST

export async function addCar(req, res) {
    const newCar = req.body;
    try {
        const car = await create(newCar, "cars");
        res.status(200).json(car);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json("ERRO: Falha na requisição.")
    }
}

export async function addBrand(req, res) {
    const newBrand = req.body;
    try {
        const brand = await create(newBrand, "brands");
        res.status(200).json(brand);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json("ERRO: Falha na requisição.")
    }
}

export async function addCarImg(req, res) {
    const newUpload = {
        desc: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const upload = await create(newUpload, "carsimg");
        const attImg = `uploads/${upload.insertedId}.png`;
        fs.renameSync(req.file.path, attImg);
        res.status(200).json(upload);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json("ERRO: Falha na requisição.")
    }
}

export async function addBrandImg(req, res) {
    const newUpload = {
        desc: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const upload = await create(newUpload, "brandsimg");
        const attImg = `uploads/${upload.insertedId}.png`;
        fs.renameSync(req.file.path, attImg);
        res.status(200).json(upload);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json("ERRO: Falha na requisição.")
    }
}

// PUT

export async function attBrand(req, res) {
    const newBrand = req.body;
    try {
        const brand = await create(newBrand, "brands");
        res.status(200).json(brand);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json("ERRO: Falha na requisição.")
    }
}

//
// controller end
//

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

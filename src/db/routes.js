import express from "express";
import multer from "multer"

import { listCars, listCar, listBrands, listBrand, addCar, addBrand, addCarImg, addBrandImg } from "../data/data.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

const routes = (app) => {
    app.use(express.json());

    // GETTERS
    app.get("/data/cars", listCars);
    app.get("/data/brands", listBrands);
    app.get("/data/cars/:id", listCar);
    app.get("/data/brands/:id", listBrand);

    // POSTS
    app.post("/data/cars", addCar);
    app.post("/data/brands", addBrand);
    app.post("/upload/brandsimg", upload.single("img"), addBrandImg);

    // PUTS
    app.put("/upload/brands/:id")
    app.put("/upload/brands/:id")
}

export default routes;

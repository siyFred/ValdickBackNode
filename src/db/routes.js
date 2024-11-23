import express from "express";

import { listCars, listCar, listBrands, listBrand, addCar, addBrand } from "../data/data.js";


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
}

export default routes;

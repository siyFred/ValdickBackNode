import express from "express";

import { listCars, listCar , listBrands, listBrand } from "../data/data.js";


const routes = (app) => {
    app.use(express.json());

    app.get("/data/cars", listCars);
    app.get("/data/brands", listBrands);

    app.get("/data/cars/:id", listCar);
    app.get("/data/brands/:id", listBrand);
}

export default routes;

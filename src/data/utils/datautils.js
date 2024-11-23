import express from "express"

import { getCarsData, getBrandsData } from "../data.js";

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
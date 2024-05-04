import React from "react";
import DB from '../assets/shoes.json';
import Spisok from "../components/Spisok";

export default function Men({ images }) {
    const  shoes = DB.men;
    const number = 0;
    const title = "Men's Shoes & Sneakers";
    return (
        <Spisok shoes={shoes} images={images} title={ title } number={number} />
    )
}
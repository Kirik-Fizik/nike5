import React from "react";
import DB from '../assets/shoes.json';
import Spisok from "../components/Spisok";

export default function Kids({ images }) {
    const  shoes = DB.kids;
    const number = 2;
    const title = "Kids' Shoes & Sneakers";
    return (
        <Spisok shoes={shoes} images={images} title={ title } number={number} />
    )
}
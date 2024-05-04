import React from "react";
import DB from '../assets/shoes.json';
import Spisok from "../components/Spisok";

export default function Women({ images }) {
    const  shoes = DB.women;
    const title = "Women's Shoes & Sneakers";
    const number = 1;
    return (
        <Spisok shoes={shoes} title={ title } images={images} number={number}/>
    )
}
import React from 'react';
import { useParams } from 'react-router-dom';
import db from '../assets/shoes.json';

export default function Shoe({images, addToBag, visible}) {
    const {pol, shoeName} = useParams();
    let sneaker;
    if (pol === '0') {
        sneaker = db.men.filter((shoe) => shoe.title === shoeName)[0];
    } else if (pol === '1') {
        sneaker = db.women.filter((shoe) => shoe.title === shoeName)[0];
    } else if (pol === '2') {
        sneaker = db.kids.filter((shoe) => shoe.title === shoeName)[0];
    }
    const addToBagIn = () => {
        addToBag(sneaker, Number(pol));
    }
    return (
        <React.Fragment>
        {visible && <div className='added'>
            <div className='added__info'>Added to Bag</div>
        </div>}
        <div className='shoe'>
            <div className='shoe__image__wrapper'>
                <img src={images[Number(pol)][sneaker.id - 1]} className='shoe__image' alt="img"></img>
            </div>
            <div className='shoe__details'>
                <div className='shoe__title'>{sneaker.title}</div>
                <div className='shoe__pol'>{(Number(pol) === 0) ? "Men's shoes" : ((Number(pol) === 1) ? "Women's shoes" : "Kids' shoes")}</div>
                <div className='shoe__cost'>${sneaker.cost}</div>
                <div>Sizes</div>
                <div className='shoe__sizes'>
                    <div>M 6 / W 7.5</div>
                    <div>M 6.5 / W 8</div>
                    <div>M 7 / W 8.5</div>
                    <div>M 7.5 / W 9</div>
                    <div>M 8 / W 9.5</div>
                    <div>M 8.5 / W 10</div>
                    <div>M 9 / W 10.5</div>
                    <div>M 9.5 / W 11</div>
                    <div>M 10 / W 11.5</div>
                    <div>M 10.5 / W 12</div>
                    <div>M 11 / W 12.5</div>
                    <div>M 11.5 / W 13</div>
                    <div>M 12 / W 13.5</div>
                    <div>M 12.5 / W 14</div>
                    <div>M 13 / W 14.5</div>
                    <div>M 14 / W 15.5</div>
                    <div>M 15 / W 16.5</div>
                    <div>M 16 / W 17.5</div>
                    <div>M 17 / W 18.5</div>
                    <div>M 18 / W 19.5</div>
                </div>
                <div onClick={addToBagIn} className='shoe__add'>Add to Bag</div>
                <div className='shoe__description'>{sneaker.description}</div>
            </div>
        </div>
        </React.Fragment>
    )
}
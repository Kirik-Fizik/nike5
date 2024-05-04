import React from "react";

export default function Bag ({ bag, removeFromBag, images }) {

    return (
        <React.Fragment>
        <div className="in__bag">
        <div className="in__bag__title">Bag</div>
            {bag.length === 0 ? <div>Bag is empty</div> :
            <ul>
            {bag.map((item) => 
            <li className="in__bag__item">
            <img src={images[Number(item.pol)][item.id - 1]} className="in__bag__image"></img>
            <div className="in__bag__description">
                <div>{item.title}</div>
                <div>${item.cost}</div>
            </div>
            <div onClick={() => removeFromBag(item)} className="in__bag__delete">X</div>
            </li>)}
            </ul>}
        </div>
        </React.Fragment>
    )
}
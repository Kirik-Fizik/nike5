import React from "react";

export default function Bag ({ bag, removeFromBag, images, sum }) {

    return (
        <React.Fragment>
        <div className="in__bag__title">Bag</div>
        <div className="in__bag__wrapper">
        <div className="in__bag">
            {bag.length === 0 ? <div>Bag is empty</div> :
            <ul>
            {bag.map((item) => 
            <li className="in__bag__item">
            <img src={images[Number(item.pol)][item.id - 1]} className="in__bag__image" alt="img"></img>
            <div className="in__bag__description">
                <div>{item.title}</div>
                <div>${item.cost}</div>
            </div>
            <div onClick={() => removeFromBag(item)} className="in__bag__delete">X</div>
            </li>)}
            </ul>}
        </div>
        <div className="in__bag__sum">
            <div>Summary</div>
            <div>${sum}</div>
        </div>
        </div>
        </React.Fragment>
    )
}
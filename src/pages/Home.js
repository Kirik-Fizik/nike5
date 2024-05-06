import React from "react";
import { Link } from 'react-router-dom';
import homeImg from '../img/home.jpg';
import db from '../assets/shoes.json';

export default function Home({images}) {
    const men = db.men;
    const women = db.women;
    const kids = db.kids;
    const [id, setId] = React.useState(0);
    const increaseId = () => {
        if (id >= 2) {
            setId(0);
        } else {
            setId(() => id + 1);
        }
        console.log(id);
    } 
    const decreaseId = () => {
        if (id <= 0) {
            setId(2);
        } else {
            setId(() => id - 1);
        }
    } 
    return (
        <div className="home">
            <div>NEW THIS WEEK</div>
            <div>
            <Link className="home__link" to="/women"><div>Shop Women's New Arrivals</div></Link>
            <Link className="home__link" to="/men"><div>Shop Men's New Arrivals</div></Link>
            </div>
            <img src={homeImg} className="home__img" alt="img"></img>
            <div className="home__list__title">Shop by classics</div>


            <div className="home__list__desktop">
            <div><button onClick={decreaseId}>&larr;</button></div>
            <Link className="home__link__img" to={`/${0}/${men[id].title}`}>
                <img src={images[0][id]} className="home__image" alt="img"></img>
            </Link>
            <Link className="home__link__img" to={`/${1}/${women[id].title}`}>
                <img src={images[1][id]} className="home__image" alt="img"></img>
            </Link>
            <Link className="home__link__img" to={`/${2}/${kids[id].title}`}>
                <img src={images[2][id]} className="home__image" alt="img"></img>
            </Link>
            <div><button onClick={increaseId}>&rarr;</button></div>
            </div>


            <div className="home__list__mobile">
            <div><button onClick={decreaseId}>&larr;</button></div>
            <Link className="home__link__img" to={`/${0}/${men[id].title}`}>
                <img src={images[0][id]} className="home__image" alt="img"></img>
            </Link>
            <div><button onClick={increaseId}>&rarr;</button></div>
            </div>

            <div className="home__list__tablet">
            <div><button onClick={decreaseId}>&larr;</button></div>
            <Link className="home__link__img" to={`/${1}/${women[id].title}`}>
                <img src={images[1][id]} className="home__image" alt="img"></img>
            </Link>
            <Link className="home__link__img" to={`/${2}/${kids[id].title}`}>
                <img src={images[2][id]} className="home__image" alt="img"></img>
            </Link>
            <div><button onClick={increaseId}>&rarr;</button></div>
            </div>

        </div>
    )
}
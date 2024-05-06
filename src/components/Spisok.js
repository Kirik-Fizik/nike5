import React from "react";
import { Link } from 'react-router-dom';

export default function Spisok({ images, shoes, title, number }) {

    const [ amount, setAmount ] = React.useState(shoes.length);

    const [spisok, setSpisok] = React.useState(shoes);
    const sortShoesLife = () => {
        let newspisok = shoes;
        setSpisok(newspisok.filter((shoe) => shoe.tag === "Lifestyle"));
    }
    const sortShoesWalk = () => {
        let newspisok = shoes;
        setSpisok(newspisok.filter((shoe) => shoe.tag === "Walking"));
    }
    const sortShoesRun = () => {
        let newspisok = shoes;
        setSpisok(newspisok.filter((shoe) => shoe.tag === "Running"));
    }
    const sortShoesBasket = () => {
        let newspisok = shoes;
        setSpisok(newspisok.filter((shoe) => shoe.tag === "Basketball"));
    }
    const sortShoesAll = () => {
        setSpisok(shoes);
    }

    React.useEffect(() => {
        setAmount(spisok.length)}, [spisok]);

    return (
        <React.Fragment>
            <div className="people__title">{title} ({amount})</div>
            <div className="people">
            <div className="people__filter">
            <div className="people__filter__in">
                <div onClick={sortShoesLife}>Lifestyle</div>
                <div onClick={sortShoesWalk}>Walking</div>
                <div onClick={sortShoesRun}>Running</div>
                <div onClick={sortShoesBasket}>Basketball</div>
                <div onClick={sortShoesAll}>All</div>
            </div>
            </div>
            <div className="people__spisok">
            <div>
                <ul className="people__spisok__in">
                    {spisok.map((shoe) => (
                        
                            <li key={shoe.id} className="people__item">
                            <Link to={`/${number}/${shoe.title}`} className="people__link">
                            <img src={images[number][shoe.id - 1]} className="people__image" alt="img"></img>
                            <div>{shoe.title}</div>
                            <div>{shoe.tag}</div>
                            <div>${shoe.cost}</div>
                            </Link>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
        </React.Fragment>
    )
}
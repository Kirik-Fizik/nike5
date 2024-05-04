import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Swoosh from '../img/swoosh.png';

function Layout ({bagLength}) {
    return (
        <>
        <header>
            <div className='header__logo'><Link to='/'><img src={Swoosh}></img></Link></div>
            <div className='header__spisok'>
                <div><Link className='header__item' to='/men'>Men</Link></div>
                <div><Link className='header__item' to='/women'>Women</Link></div>
                <div><Link className='header__item' to='/kids'>Kids</Link></div>
            </div>
            <div className='header__end'>
                <div>
                    <Link to="/bag" className='bag__link' title="Bag">
                        <div className='bag__logo'><div className='bag__top'>
                            <div className='bag__length'>{bagLength || ''}</div>
                            </div><div className='bag__end'></div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
        <Outlet/>
        <footer></footer>
        </>
    )
}

export default Layout;
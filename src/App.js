import {Routes, Route} from 'react-router-dom'; 
import React from 'react';
import Layout from './components/Layout';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Home from './pages/Home';
import Shoe from './components/Shoe';
import Bag from './pages/Bag';

import img1 from './img/men1.jpg';
import img2 from './img/men2.jpg';
import img3 from './img/men3.jpg';
import img4 from './img/men4.jpg';
import img5 from './img/men5.jpg';
import img6 from './img/men6.jpg';
import img7 from './img/men7.jpg';
import img8 from './img/men8.jpg';
import img9 from './img/men9.jpg';
import img10 from './img/men10.jpg';
import img11 from './img/men11.jpg';
import img12 from './img/men12.jpg';
import wimg1 from './img/women1.jpg';
import wing2 from './img/women2.jpg';
import wimg3 from './img/women3.jpg';
import wimg4 from './img/women4.jpg';
import wimg5 from './img/women5.jpg';
import wimg6 from './img/women6.jpg';
import wimg7 from './img/women7.jpg';
import kimg1 from './img/kids1.jpg';
import kimg2 from './img/kids2.jpg';
import kimg3 from './img/kids3.jpg';
import kimg4 from './img/kids4.jpg';
import kimg5 from './img/kids5.jpg';

const images = [[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
[wimg1, wing2, wimg3, wimg4, wimg5, wimg6, wimg7],
[kimg1, kimg2, kimg3, kimg4, kimg5]];


function App () {
  
  const [bag, setBag] = React.useState(JSON.parse(localStorage.bag) || []);

  const addToBag = (sneaker, pol) => {
    let a = false;
    for (let i of bag) {
      if ((sneaker.title === i.title) && (sneaker.pol === i[Number(pol)])) {
        a = true;
        break;
      } 
    }
    if (a === false) {
      setBag([...bag, {"pol": pol, ...sneaker}]);
      setVisible(true);
      setTimeout(() => setVisible(false), 1500);
    } 
  } 

  const removeFromBag = (item) => {
    let newBag = bag.filter((el) => el !== item);
    setBag(newBag);
  }

  const [bagLength, setBagLength] = React.useState(bag.length);
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    localStorage.bag = JSON.stringify(bag);
    setBag(JSON.parse(localStorage.bag));
    setBagLength(bag.length);}, [bag]);

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout bagLength={bagLength}/>}>
        <Route index element={<Home images={images}/>}/>
        <Route path='men' element={<Men images={images}/>} />
        <Route path='women' element={<Women images={images}/>}/>
        <Route path='kids' element={<Kids images={images}/>}/>
        <Route path=":pol/:shoeName" element={<Shoe images={images} bag={bag} addToBag={addToBag} visible={visible}/>}/>
        <Route path="bag" element={<Bag bag={bag} removeFromBag={removeFromBag} images={images}/>}></Route>
      </Route> 
    </Routes>
    </>
  )
};

export default App;

import React, { useContext } from 'react';
import { SlideIndexContext } from './contexts/SlideContext';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9 } from './slides/Slides';
import './App.css';


function App() {
  const arr = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9
  ];
  const { prevSlide, nextSlide } = useContext(SlideIndexContext);
  return (
    <div className='App'>
      <div className='slides'>
        {
          arr.map((v, i) =>
            v
          )
        }
      </div>
      <div className='slide-buttons'>
        <button onClick={() => prevSlide(arr.length)}><span>&#60;</span></button>
        <button onClick={() => nextSlide(arr.length)}><span>&#62;</span></button>
      </div>

    </div >
  );
}

export default App;

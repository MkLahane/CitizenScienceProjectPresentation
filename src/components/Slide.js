import React, { useContext } from 'react';
import { SlideIndexContext } from '../contexts/SlideContext';
import './slide.css';

const Slide = ({ slideIndex, children }) => {
    const { currentSlideIndex } = useContext(SlideIndexContext);
    const offset = slideIndex - currentSlideIndex;
    const rotDir = (offset === 0) ? 0 : ((offset < 0) ? -1 : 1);
    const isSlideActive = currentSlideIndex === slideIndex;
    const slideStyle = {
        position: 'relative',
        '--offset': offset,
        '--rotDir': rotDir,
        gridArea: '1 / -1',
        width: 'var(--slide-w)',
        height: 'var(--slide-h)',
        background: '#1B1919',
        transition: 'all 0.3s ease',
        padding: '60px'
    };
    return (
        <div className={isSlideActive ? 'active-slide' : 'inactive-slide'} style={slideStyle}>
            {isSlideActive && children}
        </div >
    );
};

export default Slide;
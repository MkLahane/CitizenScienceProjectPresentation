import React from 'react';
import './para.css';
const Para = ({ paraText, style }) => {
    return (
        <p className='para' style={style}>
            {paraText}
        </p>
    );
}

export default Para;
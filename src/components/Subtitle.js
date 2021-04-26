import React from 'react';
import './subtitle.css';

const Subtitle = ({ titleText, style }) => {

    return (
        <span className='subtitle' style={style}>
            {titleText}
        </span>
    )
};

export default Subtitle;
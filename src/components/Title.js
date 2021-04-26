import React from 'react';
import './title.css';

const Title = ({ titleText, style }) => {

    return (
        <span className='title' style={style}>
            {titleText}
        </span>
    )
};

export default Title;
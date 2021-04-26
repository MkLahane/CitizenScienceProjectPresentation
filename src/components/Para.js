import React from 'react';

const Para = ({ paraText, style }) => {
    return (
        <p className='para' style={style}>
            {paraText}
        </p>
    );
}

export default Para;
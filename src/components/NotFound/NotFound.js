import React from 'react';
import './NotFound.css';
import no_img from '../elements/img/404.gif';

const NotFound = () => {
    return (
        <div style = {{width: "50%", margin: '0 auto' }}>
            <img src={no_img} 
            className = "w-100 not-found-img"
            alt = "404 img"
            >
            </img>
        </div>
    )
}

export default NotFound;




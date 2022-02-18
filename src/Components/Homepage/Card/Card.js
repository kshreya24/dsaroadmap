import React from 'react'

import './Card.css';
function Card({ title, details, image }) {
    return (
        <div className="card">
            <div className="card__upper">
                <h2>{title}</h2>
                <img src={image} alt="idsardmp"></img>
            </div>
            <div className="card__lower">
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Card

import React from "react";
import './Card.css'

import img from '../assets/teacher.webp'

function Card(props) {
    return (
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <img className="circle-img" src={img} alt="brajesh" />
                </div>
                <div className="bottom">
                    <p className="info">{props.email}</p>
                    <p className="info">Mobile: {props.phone}</p>
                    <p className="info">Degination: {props.degination}</p>
                    <p className="info">Experience: {props.experience} Years</p>
                </div>
            </div>
        
    );
}

export default Card;
import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card">
    <img
      alt="character"
      src={`https://robohash.org/${props.movieCaracter.id}?set=set4`}
    ></img>
    <h2>{props.movieCaracter.name}</h2>
    <h3>{props.movieCaracter.email}</h3>
  </div>
);

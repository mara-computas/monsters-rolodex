import React from "react";
import "./card-list.styles.css";
import { Card } from "./card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.movieCaracters.map((movieCaracter) => (
      <Card key={movieCaracter.id} movieCaracter={movieCaracter} />
    ))}
  </div>
);

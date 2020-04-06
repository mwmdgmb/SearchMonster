import React from "react";
import "./cardlist.css";
import CardComponent from "../card/Card-components";

const CardList = props => {
  return (
    <div className="cardlist">
      {props.monsters.map(monster => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;

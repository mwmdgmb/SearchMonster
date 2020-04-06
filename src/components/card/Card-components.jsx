import React from "react";
import "./cardComponent.css";

function CardComponent(props) {
  return (
    <div className="card-container shadow">
      <img
        className="rounded-circle border bg-dark pt-2"
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default CardComponent;

import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="image">
      <div className="img-box">
        <img alt={props.id} src={props.image} clicked={props.clicked} onClick={() => props.removeFriend(props.id)} />
      </div>
    </div>
  );
}

export default FriendCard;

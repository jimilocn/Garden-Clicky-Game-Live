import React from "react";
import "./style.css";
import Modal from "../Modal"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
     <img alt="logo"className = "logo" src = "/img/logo.png"/>
      <hr></hr>
    <Modal></Modal>
    </div>
  );
}

export default Jumbotron;

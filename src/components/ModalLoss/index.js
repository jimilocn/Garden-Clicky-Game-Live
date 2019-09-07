import React from "react";
import "./style.css";

function ModalLoss(props) {
  return (
      <div className = "loss text-center">
        <div className="card mb-3">
      
          <h2 className="card-header">You have angered my flowers!</h2>
       
          <div className="card-body">
       
              <h5 className="card-title">They may forget about your crimes by tomorrow</h5>
                <p className="card-text"><h6>Come back later to try again</h6></p>
                <a className="btn btn-primary" onClick={() => props.closeModal(props.id)}>Come back to the Garden the next night</a>
          </div>
        </div>
      </div>
  );
}

export default ModalLoss;

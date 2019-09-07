import React from "react";
import "./style.css";

function Modal() {
  return (
      <div>
    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">
    Rules of the Land
    </button>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">How to play with my flowers</h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <p>
        You may play with my flowers tonight. In this garden, my flowers come alive and will dance around for you. 
        
        <h4><b>Be warned!</b></h4>

        The flowers only like to be picked once.  Disturb them more than that, and you will be kicked out.
        </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Let's start</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Modal;

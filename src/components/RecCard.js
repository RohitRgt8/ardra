import React from "react";
import { Modal } from "react-bootstrap";

function RecCard(props) {
    const { name,designation,message,company } = props.recommendation;
    var finalmsg = "";
    if(props.message.length > 30)
        finalmsg = props.message.slice(0,30);
    else 
        finalmsg = props.message;
    return(
        <div className="col-12 col-md-4">
        
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">{finalmsg}...</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
                {designation} at {company}
              </p>
            </div>
          </div>
        
      </div>
        );
}

export defualt RecCard;


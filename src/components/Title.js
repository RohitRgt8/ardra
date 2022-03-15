import React from "react";
import Rohit from "../assets/react.png";

function Title(props) {
    const {name,pos} = props;
    return(
    <div className="container py-5">
        <div className="row text-center align-items-center">
            <div className="col-12 col-md-6 ">
                <img className="img-fluid rounded-circle w-75 pt-5" src={Rohit} alt="Rohit George"/>
            </div>
            <div className="col-12 col-md-6">
            <div className="font-weight-light" style={{ fontSize: "40px" }}>
                    <p>Hi! This is <span className="text-info">Ardra Saji</span></p>
                </div>
                <h4 className="font-weight-light">Chair IEEE FISAT SB</h4>
            </div>
        </div>
    </div>
    );
}

export default Title;
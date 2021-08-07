import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class RecommendationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleModal() {
    this.setState({
      show: !this.state.show,
    });
  }
  recdata = this.props.recommendation;

  render() {
    var finalmsg = "";
    var msg = this.recdata.message;
    if (msg.length > 25) {
      finalmsg = msg.slice(0, 25);
      finalmsg = finalmsg.concat("...");
    } else {
      finalmsg = msg;
    }
    return (
      <div className="col-12 col-md-4">
        <a
          onClick={() => {
            this.handleModal();
          }}
        >
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">{finalmsg}</h4>
              <p className="card-text text-secondary mb-0">
                {this.recdata.name}
              </p>
              <p className="card-text text-secondary">
                {this.recdata.designation} at {this.recdata.company}
              </p>
            </div>
          </div>
        </a>

        <Modal show={this.state.show}>
          <Modal.Header className="text-center">
            {this.recdata.name}
          </Modal.Header>
          <Modal.Body className="text-center">
            {this.recdata.message} <br />
            {this.recdata.company} at {this.recdata.designation}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default RecommendationCard;

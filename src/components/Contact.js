import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      description: "",
      submitMessage: "",
      submitTextColor: "",
    };
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank You ${name}`,
        submitTextColor: "text-center text-info",
      });
    } else {
      this.setState({
        submitMessage: `Sorry. Try again later!`,
        submitTextColor: "text-center text-danger",
      });
    }
  };
  render() {
    const { submitMessage, submitTextColor } = this.state;
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank You</span> for your interest
        </h1>
        <div className="row justify-content-center ">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="5"
                  name="description"
                  className="form-control"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-dark float-right"
              >
                SUBMIT
              </button>
            </form>
            <div className="py-5">
              <h2 className={submitTextColor}>{submitMessage}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

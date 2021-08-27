import React, { Component } from "react";

class Writearec extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      recmsg: "",
      company: "",
      designation: "",
      submitmsg: "",
      submitmsgcolor: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let isSuccess = true;
    const { name } = this.state;
    if (isSuccess) {
      this.setState({
        submitmsg: `Thank You ${name} for your recommendation`,
        submitmsgcolor: "text-info text-center",
      });
    } else {
      this.setState({
        submitmsg: "Sorry! Try again later",
        submitmsgcolor: "text-danger text-center",
      });
    }
  };

  render() {
    const { submitmsg, submitmsgcolor } = this.state;
    return (
      <div className="container py-5">
        <h1 className="font-weight-light text-center py-5">
          Please put in your <span className="text-info"> Recommendation </span>
          here.
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Institution</label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmFor="recommsg">Recommendation</label>
                <textarea
                  className="form-control"
                  type="text"
                  rows="5"
                  onChange={this.onChange}
                  name="recommsg"
                ></textarea>
              </div>
              <button
                className="btn btn-outline-dark float-right"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="py-5">
              <h1 className={submitmsgcolor}>{submitmsg}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Writearec;

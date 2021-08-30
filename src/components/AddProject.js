import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";

class AddProject extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
    submitmsg: "",
    submitmsgtextcolor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let isSuccessful = true;
    if (isSuccessful) {
      this.setState({
        submitmsg: `Work published successfully`,
        submitmsgtextcolor: "text-info",
      });
    } else {
      this.setState({
        submitmsg: "Oops! Something went wrong",
        submitmsgtextcolor: "text-danger",
      });
    }
  };

  render() {
    const { imageUrl, title, body, submitmsg, submitmsgtextcolor } = this.state;
    return (
      <div className="container-fluid my-5 py-5">
        <h1 className="text-center my-5 font-weight-light">
          Add <span className="text-info">Work</span>
        </h1>
        <div className="row px-3">
          <div className="col-12 col-lg-6">
            <form>
              <div className="form-group">
                <label htmlFor="imageUrl">Featured Image URL *</label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <input
                  type="text"
                  name="excerpt"
                  id="excerpt"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <SimpleMDE
                onChange={this.onBodyChange}
                options={{
                  hideIcons: ["preview", "side-by-side", "fullscreen"],
                }}
              />
              <button
                type="submit"
                onSubmit={this.onSubmit}
                className="btn btn-dark btn-block my-5"
              >
                Publish
              </button>
            </form>
            <div className="text-center">
              <h5 className={submitmsgtextcolor}>{submitmsg}</h5>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="img-fluid" />
            </div>
            <h1 className="text-center my-5 font-weight-light">{title}</h1>
            <ReactMarkdown source={body} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;

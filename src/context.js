import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    project: [
      {
        id: 1,
        title: "Chair",
        content: "IEEE FISAT SB",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
      },
      {
        id: 2,
        title: "Marketting Intern",
        content: "ReverTech IT Solutions",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
      },
      {
        id: 3,
        title: "Personal Portfolio",
        content: "React.js",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
      },
      {
        id: 4,
        title: "UI/UX",
        content: "Reviber Technologies",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

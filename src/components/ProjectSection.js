import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  const project = [
    {
      id: 1,
      title: "M D Vice Chair",
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
  ];

  return (
    <div id="works" className="container text-center my-5">
      <h1 className="font-weight-bold my-2">
        My <span className="text-info">Works</span>
      </h1>
      <div className="row my-5 pt-3">
        {project.map((project) => (
          <div key={project.id} className="col-12 col-md-4 my-2">
            <ProjectCard project={project} />
          </div>
        ))}
        <div className="pt-4 ml-auto">
          <a href="/" className="text-dark text-right">
            <h5>
              More Works
              <i className="fas fa-arrow-right text-dark align-middle"></i>
            </h5>
          </a>
        </div>
        s
      </div>
    </div>
  );
}

export default ProjectSection;

import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function ProjectSection() {
  return (
    <Consumer>
      {(value) => {
        const { project } = value;
        return (
          <div id="works" className="container text-center my-5">
            <h1 className="font-weight-bold my-2">
              My <span className="text-info">Works</span>
            </h1>
            <div className="row my-5 pt-3">
              {project.slice(0, 3).map((project) => (
                <div key={project.id} className="col-12 col-md-4 my-2">
                  <ProjectCard project={project} />
                </div>
              ))}
              <div className="pt-4 ml-auto">
                <Link to="/allprojects" className="text-dark text-right">
                  <h5>
                    More Works
                    <i className="fas fa-arrow-right text-dark align-middle"></i>
                  </h5>
                </Link>
              </div>
              s
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectSection;

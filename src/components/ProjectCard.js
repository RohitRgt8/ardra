import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { project } = props;
  return (
    <div className="card shadow h-100">
      <img className="card-img-top" src={project.imageUrl} alt="Work1" />
      <div className="card-body">
        <h4 className="card-title">{project.title}</h4>
        <p className="card-text">{project.content}</p>
        <Link to={`/project/${project.id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default ProjectCard;

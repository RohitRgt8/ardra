import React from "react";

function ProjectCard(props) {
    const { project } = props;
    return (
        <div className="card shadow h-100">
                    <img className="card-img-top" src={project.imageUrl} alt="Work1"/>
                    <div className="card-body">
                        <h4 className="card-title">
                            {project.title}
                        </h4>
                        <p className="card-text">{project.content}</p>
                        <a href="/" className="stretched-link"></a>
                    </div> 
                </div>
    );
}

export default ProjectCard;
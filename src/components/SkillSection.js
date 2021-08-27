import React from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";

function SkillSection() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 2,
      name: "CSS3",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 3,
      name: "Bootstrap 4",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 4,
      name: "React",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/react.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 5,
      name: "Javascript",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 6,
      name: "Python",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/python.png",
      starsTotal: 3,
      starsActive: 2,
    },
  ];

  const finalSkillRow = [];
  for (let i = 0; i < skills.length / 3; i++) {
    let skillRow = skills.slice(i * 3, (i + 1) * 3);
    finalSkillRow.push(
      <div key={uuid()} className="d-flex justify-content-around py-3">
        {skillRow.map((skills) => (
          <Skill key={uuid()} skills={skills} />
        ))}
      </div>
    );
  }

  return (
    <div id="career" className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-bold">
          <span className="text-info">Technology</span> Stack
        </h1>
        {finalSkillRow}
      </div>
    </div>
  );
}

export default SkillSection;

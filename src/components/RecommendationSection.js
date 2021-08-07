import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import RecommendationCard from "./RecommendationCard";

function RecommendationSection() {
  const recommendations = [
    {
      id: 1,
      name: "Random Guy 1",
      company: "ABC Company",
      designation: "CEO",
      message:
        "Random Comment 1 Rohit George Thomas Federal Institute of Science and Technology",
    },
    {
      id: 2,
      name: "Random Guy 2",
      company: "ABC Company",
      designation: "Director",
      message: "Random Comment 2",
    },
    {
      id: 3,
      name: "Random Guy 3",
      company: "ABC Company",
      designation: "Director",
      message: "Random Comment 3",
    },
    {
      id: 4,
      name: "Random Guy 4",
      company: "XYZ Company",
      designation: "CEO",
      message: "Random Comment 4",
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto">
        {recommendations.map((recommendation) => (
          <RecommendationCard key={uuid()} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
}

export default RecommendationSection;

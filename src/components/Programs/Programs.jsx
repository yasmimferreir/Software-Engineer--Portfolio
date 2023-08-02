import React from "react";
import "./Programs.css";
import programsData from "../../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">+</span>
        <span> Minhas</span>
        <span className="stroke-text"> Habilidades</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={program.id}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

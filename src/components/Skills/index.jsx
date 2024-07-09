import React from 'react';
import "./Skills.css";
import { experience } from "../../data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skill">
      <div className="section_wrapper">
        <div className="section_header center">
          <h2 className="primary_title">My Skills</h2>
        </div>
        <div className="skill_container">
          {
            experience.map((list, index) => (
              <SkillCard 
                {...list}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;

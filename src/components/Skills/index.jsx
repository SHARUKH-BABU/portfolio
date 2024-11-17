import React, { useRef } from 'react';
import "./Skills.css";
import { experience } from "../../data";
import SkillCard from "./SkillCard";
import { gsap } from 'gsap/gsap-core';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {

  const skillCardRef = useRef([]);
  var i = 0;
  useGSAP(() => {
    gsap.from(skillCardRef.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillCardRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
      stagger : 0.5,
    });
  });
  return (
    <section id="skills">
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
                ref={(el) => (skillCardRef.current[i++] = el)}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;

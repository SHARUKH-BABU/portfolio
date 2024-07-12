import React, { useEffect, useRef, useState } from 'react';
import "./Projects.css";
import { sumArray } from "../../helper";
import { projects } from "../../data";
import Card from './Card';

const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "UI/UX" },
];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(
      sumArray(
        prevEl.map(item => item.offsetWidth)
      )
    );
    setIndicatorWidth(itemsEls.current[activeIndex]?.offsetWidth || 0);
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === 'All') {
      return setDisplayableProjects(projects);
    }
    const pro = projects.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    setDisplayableProjects(pro);
  };

  return (
    <section id="projects">
      <div className="section_wrapper projects_container">
        <div className="section_header center">
          <h2 className="primary_title">Projects</h2>
        </div>

        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={el => itemsEls.current[index] = el}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active_indicator"
            style={{
              left: `${offset}px`,
              width: `${indicatorWidth}px`
            }}
          ></span>
        </nav>

        <div className="card_container">
          {displayableProjects.map((project, index) => (
            <Card
              title={project.title}
              img={project.image}
              data={project.data}
              stack={project.stack}
              demoLink={project.data.demoLink}
              key={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

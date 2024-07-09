import React from 'react'
import "./About.css"
import { sharukhPhoto} from "../../images"

const About = () => {
  return (
    <section id="about">
      <div className="section_wrapper about_container">
        <div className="me_container blur-effect">
          <div className="photo_container">
            <img src={sharukhPhoto} alt="my photo" />
          </div>
        </div>
        <div className="section_header">
          <h2 className="primary_title">About Me</h2>
          <h1 className="title">I am <span className="color_primary">Shaik SharukhBabu</span></h1>
          <p className="text_muted description">
            Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and
            responsive applications. Proficient in multiple programming languages and frameworks, 
            as well as database design and management. Strong problem-solving and analytical skills, 
            and a track record of delivering high-quality code on time and on budget.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

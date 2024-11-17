import React, { useRef } from 'react'
import "./About.css"
import { profile1} from "../../images"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () => {

  const aboutTitle = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  useGSAP(()=>{
    gsap.timeline().from(aboutTitle.current, {
      scale : 10, 
      duration : 2,
      delay : 0.1,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutTitle.current,
        start: "top 60%",
        end: "top 55%",
        scrub : 2,
      },
    })
    gsap.timeline().from(titleRef.current, {
      scale : 0.5,
      duration : 0.5,
      delay : 1,
      opacity : 0,
      scrollTrigger :{
        trigger : titleRef.current,
        start: "top 70%",
        end: "top 60%",
        scrub : 2,
      }
    })
    gsap.timeline().from(descRef.current, {
      scale : 0.5,
      duration : 0.5,
      delay : 2,
      opacity : 0,
      scrollTrigger :{
        trigger : descRef.current,
        start: "top 80%",
        end: "top 71%",
        scrub : 2,
      }
    })
  })

  return (
    <section id="about">
      <div className="section_wrapper about_container">
        <div className="me_container blur-effect">
          <div className="photo_container">
            <img src={profile1} alt="my photo" />
          </div>
        </div>
        <div className="section_header">
          <h2 className="primary_title" ref={aboutTitle}>About Me</h2>
          <h1 className="title" ref={titleRef}>I am <span className="color_primary">Shaik SharukhBabu</span></h1>
          <p className="text_muted description" ref={descRef}>
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

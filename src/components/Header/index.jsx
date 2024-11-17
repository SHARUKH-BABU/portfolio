import React, { useState, useEffect, useRef } from 'react';
import "./Header.css"
import { prof } from "../../images"
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';

const Header = () => {
  const [title, setTitle] = useState("");
  const text = "WEB DEVELOPER";
  const intervalId = useRef(null);
  let reverse = false;
  const [cursorXPosition, setCursorXPosition] = useState(0);
  const [cursorYPosition, setCursorYPosition] = useState(0);
  const cursorRef = useRef();
  const moveSlowly = useRef();

  useEffect(() => {
    let i = 0;
    intervalId.current = setInterval(() => {
      if (!reverse) {
        setTitle(text.slice(0, i));
        i++;
        if (i > text.length) {
          reverse = true;
        }
      } else {
        setTitle(text.slice(0, i));
        i--;
        if (i === 0) {
          reverse = false;
        }
      }
    }, 200); // Text change interval remains 200ms

    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    // Cursor follow animation
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX-5,
        y: e.clientY-110,
        duration: 0.2,
        ease: "bounce"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Image movement animation
    const animateImage = () => {
      gsap.to(moveSlowly.current, {
        y: '+=15', // Move down by 15px
        x: '+=10', // Move right by 10px
        duration: 2, // Duration of movement
        ease: 'power1.inOut', // Smooth easing
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse animation
        repeatRefresh: true, // Randomize on each repeat
        onRepeat: () => {
          // Randomize slight movements on repeat
          const randomX = Math.random() * 15 - 5; // Random between -5 and 5
          const randomY = Math.random() * 15 - 5; // Random between -5 and 5
          gsap.set(moveSlowly.current, { x: `+=${randomX}`, y: `+=${randomY}` });
        },
      });
    };

    animateImage();
  }, []);

  return (
    
    <header id="header" className="blur-effect">
      <div id="cursor-follow" ref={cursorRef}></div>
      <div className="section_wrapper header_container">
        <div className="column intro_container blur-effect">
          <div className="header_info">
            <div className="header_info_top">
              Hello There! I'm <span className="color_primary">SHAIK SHARUKHBABU</span>
            </div>
            <div className="header_info_middle">
              <h1 className="primary_title header_title" id='changing'>
                I'M A {title} <span id='cursor'>|</span>
              </h1>
              <p className="text_muted header_description">
                I dissect intricate user experience challenges to engineer integrity-focused solutions that resonate with lots of users.
              </p>
            </div>
            <div className="header_info_bottom">
              <a href="./sharukh-resume.pdf" className="btn" target='_blank'> My Resume </a>
              <a href="mailto:sharukhbabushaik@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="profile_photo_container" ref={moveSlowly}>
            <img src={prof} alt="my profile pic" className="profile_photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

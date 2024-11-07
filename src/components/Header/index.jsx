import React, { useState, useEffect, useRef } from 'react';
import "./Header.css"
import { prof } from "../../images"

const Header = () => {
  const [title, setTitle] = useState("");
  const text = "WEB DEVELOPER";
  const intervalId = useRef(null);
  let reverse = false;

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

  return (
    <header id="header" className="blur-effect">
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
                I dissect intricate user experience challenges to engineer integrity-focused solutions that resonate with billions of users.
              </p>
            </div>
            <div className="header_info_bottom">
              <a href="./sharukh-resume.pdf" className="btn" target='_blank'> My Resume </a>
              <a href="mailto:sharukhbabushaik@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="profile_photo_container">
            <img src={prof} alt="my profile pic" className="profile_photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

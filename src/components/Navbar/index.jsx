import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { Link } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from 'react-icons/fa6'; // Import from fa6 if it includes FaArrowUpRightFromSquare and FaBarsStaggered
import { FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const tabItemsRef = useRef([]);

 

  return (
    <nav className='navbar_container'>
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}

      <div className="logo_container">
        <SiWebmoney />
      </div>
      <div className={`tab_group ${showSidebar ? 'show' : ''}`}>
        <span className="icon_container close_btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            ref={el => tabItemsRef.current[index] = el}
            activeClass='active'
            className='tab_item name'
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="nav_buttons_group">
        <Link className="btn btn_primary" to="contact" spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          HIRE ME <FaArrowUpRightFromSquare />
        </Link>
        <FaBarsStaggered className="menu" onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
}

export default Navbar;

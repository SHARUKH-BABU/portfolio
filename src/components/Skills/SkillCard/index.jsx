import React from 'react';
import "./SkillCard.css";
import { BsPatchCheckFill } from 'react-icons/bs';

const SkillCard = ({ title, data }) => {
  return (
    <div className="skill_card">
      <h3>{title}</h3>
      <div className="skill_content">
        {
          data.map((list, index) => (
            <article className="skill_details" key={index}>
              <BsPatchCheckFill className='skill_icon' />
              <div>
                <h4 className="skill_name">{list.skill}</h4>
                <small className="text_muted skill_level">{list.level}</small>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
};

export default SkillCard;

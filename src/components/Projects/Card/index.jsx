import React from 'react';
import "./Card.css";

const Card = ({ img, title, data, stack, demoLink }) => {

  return (
    <div className="card">
      <div className="picture">
        <img src={img} alt={title} />
      </div>

      <div className="card_details">
        <div className="card_details_top">
          <h2 className="title">{title}</h2>
        </div>
        <div className="card_details_middle">
          <p className="description text_muted" >
            {data.description}
          </p>
        </div>
        <div className="card_details_bottom">
          <div className="stack_container">
            <div className="stack_left">stack</div>
            <div className="stack_right">
              <div className="stack_box_container">
                {stack.slice(0, 4).map((list, index) => (
                  <div className="stack_box" key={list.id || index}>
                    <div className="stack_icon_container">
                      <span className="stack_icon" style={{ color: list.iconColor }}>
                        {list.icon}
                      </span>
                      <span className="stack_name">
                        {list.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="button_container">
            <a href={demoLink} target='_blank' className="btn btn_primary letters_spacing" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

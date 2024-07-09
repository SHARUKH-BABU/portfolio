import React, { useState } from 'react';
import "./Card.css";
import { AiOutlineShareAlt } from 'react-icons/ai';

const Card = ({ img, title, data, stack, demoLink }) => {
  const [openStackExpandBar, setOpenStackExpandBar] = useState(false);

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
          <p className="description">
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

              {stack.length > 4 && (
                <div className="stack_view_more">
                  <button className="more_btn" onClick={() => setOpenStackExpandBar(!openStackExpandBar)}>
                    {openStackExpandBar ? 'Show Less' : 'Show More'}
                  </button>
                  <div className={`stack_expand_box ${openStackExpandBar ? "open_stack_expand_box" : ""}`}>
                    <h3 className="title">More Stack Used</h3>
                    <div className="stack_box_container">
                      {stack.slice(4).map((list, index) => (
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
              )}
            </div>
          </div>
          <div className="button_container">
            <a href={demoLink} target='_blank' className="btn btn_primary" rel="noopener noreferrer">Demo</a>
            <div className="btn_share"><AiOutlineShareAlt /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

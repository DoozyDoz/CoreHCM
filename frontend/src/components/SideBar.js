// Sidebar.jsx

import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebars.css";
import { Link } from "react-router-dom";

const Sidebar = ({ menuItems }) => {
  // Initialize the open state based on defaultOpen property
  const initialState = menuItems.reduce((state, item, index) => {
    state[index] = item.defaultOpen || false;
    return state;
  }, {});

  const [openSections, setOpenSections] = useState(initialState);

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
      <Link
        to="/"
        className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
      >
        <svg className="bi pe-none me-2" width="30" height="24">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </Link>
      <ul className="list-unstyled ps-0">
        {menuItems.map((item, index) => (
          <li className="mb-1" key={index}>
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
              onClick={() => toggleSection(index)}
              aria-expanded={openSections[index]}
            >
              {item.title}
            </button>
            {item.children && (
              <Collapse in={openSections[index]}>
                <div>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          to={child.link}
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

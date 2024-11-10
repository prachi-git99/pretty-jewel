import React from "react";
import "./sectionHeading.css";

const SectionHeading = ({ title, list }) => {
  return (
    <div className="sectionHeading">
      <div className="d-flex align-items-center">
        <h2 className="title">{title}</h2>
        <ul className="list list-inline ms-auto filterTab ">
          {list.map((item, index) => (
            <li key={index} className="list-inline-item">
              <a className="cursor">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionHeading;

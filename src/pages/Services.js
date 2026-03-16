import React from "react";

const Services = ({ title, listItems, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default Services;
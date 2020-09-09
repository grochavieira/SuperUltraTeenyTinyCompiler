import React from "react";

import "./styles.css";

const Card = ({ title, content }) => {
  return (
    <div className="card-container">
      <div className="title">
        <p>🔹{title}🔹</p>
      </div>

      <div className="content">
        <pre>
          {typeof content !== "string"
            ? JSON.stringify(content, null, 2)
            : content}
        </pre>
      </div>
    </div>
  );
};

export default Card;

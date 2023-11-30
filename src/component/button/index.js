import React from "react";

const BoxButton = ({ icons, type, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {icons}
        {type}
      </button>
    </div>
  );
};

export default BoxButton;

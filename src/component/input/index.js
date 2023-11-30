import React from "react";

const TextInput = ({ icon, type, value, placeholder, className, onChange }) => {
  return (
    <>
      <input
        className={className}
        icon={icon}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;

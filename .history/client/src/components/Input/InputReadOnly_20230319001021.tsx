import React from "react";

const InputReadOnly = ({ title, data, width }) => {
  return (
    <div className={width}>
      <label className="font-semibold" htmlFor={title}>
        {title}
      </label>
      <input
        type="text"
        id={title}
        value={data || ""}
        className="mt-2 cr-input-text bg-[#c5d3f1]"
        readOnly
      />
    </div>
  );
};

export default InputReadOnly;

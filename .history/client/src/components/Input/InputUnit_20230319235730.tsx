import React from "react";
// rounded-tl-md rounded-bl-md
const InputUnit = ({
  title,
  unit,
  rounded,
  value,
  setValue,
  name,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div className="w-1/2">
      <label className="font-semibold" htmlFor={title}>
        {title}
      </label>
      <div className="flex mt-2">
        <input
          type="text"
          id={title}
          className={`px-3 py-1 border-[2px] border-[#a0c7d6] outline-none ${
            rounded || "rounded-tl-md rounded-bl-md"
          } focus:border-[#4b5fc2] cr-transition box-border flex-1`}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
          onFocus={() => setInvalidFields([])}
        />
        {unit && (
          <span className="min-h-full w-[50px] bg-slate-300 flex items-center justify-center rounded-tr-md rounded-br-md border-[2px] border-l-0 border-[#a0c7d6]">
            {unit}
          </span>
        )}
      </div>
      {unit === "đồng" && (
        <p className="mt-2 text-xs">
          Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
        </p>
      )}
      <small className="text-red-500">
        {invalidFields?.some((item) => item.name === name) &&
          invalidFields?.find((item) => item.name === name)?.message}
      </small>
    </div>
  );
};

export default InputUnit;

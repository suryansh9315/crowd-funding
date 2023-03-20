import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  value,
  handleChange,
  isTextArea,
}) => {
  return (
    <label htmlFor="" className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] bg-transparent border-[#3a3a43] font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
          required
        />
      ) : (
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] bg-transparent border-[#3a3a43] font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
          required
        />
      )}
    </label>
  );
};

export default FormField;

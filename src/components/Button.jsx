import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button className="px-4 py-2 text-xs md:text-base  rounded-md bg-slate-700 text-stone-400 hover:bg-slate-600 hover:text-stone-100" {...props}>
      {children}
    </button>
  );
};

export default Button;

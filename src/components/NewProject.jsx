import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-red-600 hover:text-red-900">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-slate-600 text-green-400 hover:text-green-700">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textare />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;

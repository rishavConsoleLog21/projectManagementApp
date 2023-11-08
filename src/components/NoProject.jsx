import React from "react";
import noProject from "../assets/no-projects.png";
import Button from "./Button";

const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProject}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-slate-500 my-4">
        No Project Selected
      </h2>
      <p className="text-slate-400 mb-4">
        Select a project or Start with a new one!
      </p>
      <p className="mt-8 ">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProject;

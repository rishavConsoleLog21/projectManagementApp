import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({ project, onDelete }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font=bold text-slate-600 mb-2">
            {project.title}
          </h1>
          <button onClick={onDelete} className="text-red-600 hover:text-red-900">Delete</button>
        </div>
        <p className="mb-4 text-slate-400">{formattedDate}</p>
        <p className="text-slate-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
};

export default SelectedProject;

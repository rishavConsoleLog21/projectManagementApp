import React from "react";

const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base  rounded-md bg-slate-700 text-stone-400 hover:bg-slate-600 hover:text-stone-100">
          Start New Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;

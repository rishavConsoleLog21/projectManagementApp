import React, { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProject((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(project);

  let content;

  if (project.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (project.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;

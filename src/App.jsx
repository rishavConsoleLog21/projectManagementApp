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

  let content;

  if (project.selectedProjectId === null) {
    content = <NewProject />;
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

import React, { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(projectId) {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleStartProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = project.projects.find(
    (projectId) => projectId.id === project.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

  if (project.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (project.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartProject}
        projects={project.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;

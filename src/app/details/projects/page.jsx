"use client";
import { useState } from "react";
import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import ProjectBanner from "../../components/ProjectBanner";

const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);

  const handleProjectAdd = () => {
    const newProjects = [...projects];

    setProjectName("")
    if (newProjects.includes(projectName)) {
      return;
    }

    newProjects.push(projectName);
    setProjects(newProjects)
  };

  const handleProjectDelete = (value) => {
    const newProjects = [...projects];
    const index = newProjects.indexOf(value);
    newProjects.splice(index, 1);

    setProjects(newProjects);
  }

  return (
    <div className="main-page-horizontal">
      <div className="main-left">
        <TypeAnimationDetails>Personal projects show initiative!</TypeAnimationDetails>
        <p>
          Personal projects play a crucial role in a resume, especially when internships are not
          available, as they demonstrate initiative and problem-solving skills, highlighting your
          creativity, and passion, making you a strong candidate even without formal work
          experience.
        </p>
        <br />
        <div className="details-input gap-2">
          <p>
            Projects
            <span className="form-hint">Use 2-3 projects relating to your application.</span>
          </p>
          {projects.map((name, index) => {
            return <ProjectBanner key={index} name={name} onClick={handleProjectDelete} />
          })}
          <div className="flex justify-center items-center w-full gap-2">
            <input type="text" name="project-input" className="w-full" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            <button
              className="w-10 h-[2em] flex justify-center items-center bg-white text-black rounded-md text-l mild-glowing-button"
              onClick={handleProjectAdd}
            >
              &#43;
            </button>
          </div>
        </div>
      </div>
      <div className="main-right"></div>
    </div>
  );
};

export default Projects;

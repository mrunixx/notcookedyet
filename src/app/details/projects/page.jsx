"use client";
import { useState, useEffect } from "react";
import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import ProjectBanner from "../../components/ProjectBanner";
import Link from "next/link";

const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState(() => {
    const storedData = localStorage.getItem("projects");
    return storedData ? JSON.parse(storedData) : [];
  })

  const handleProjectAdd = () => {
    const newProjects = [...projects];
    if (newProjects.length === 3) {
      return;
    }
    if (newProjects.includes(projectName) || projectName === "") {
      return;
    }

    const newProject = {
      name: projectName,
      url: "",
    };
    setProjectName("");
    newProjects.push(newProject);
    setProjects(newProjects);
  };

  const handleProjectDelete = (value) => {
    const newProjects = [...projects];
    const index = newProjects.indexOf((p) => JSON.parse(p).name === value);
    newProjects.splice(index, 1);

    setProjects(newProjects);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleProjectAdd();
    }
  }

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div className="main-page w-1/2">
      <TypeAnimationDetails>Personal projects show initiative!</TypeAnimationDetails>
      <p>
        Personal projects play a crucial role in a resume, especially when internships are not
        available, as they demonstrate initiative and problem-solving skills, highlighting your
        creativity, and passion, making you a strong candidate even without formal work experience.
      </p>
      <div className="details-input gap-2">
        <p>
          Projects 
          <span className="form-hint"> Use 2-3 projects relating to your application.</span>
        </p>
        {projects.map((p, index) => {
          return <ProjectBanner key={index} name={p.name} url={p.url} onClick={handleProjectDelete} />;
        })}
        <div className="flex justify-center items-center w-full gap-2">
          <input
            type="text"
            name="project-input"
            className="w-full"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="e.g notcookedyet"
          />
          <button
            className="w-10 h-[2em] flex justify-center items-center bg-white text-black rounded-md text-l mild-glowing-button"
            onClick={handleProjectAdd}
          >
            &#43;
          </button>
        </div>
      </div>
      <Link href="/details/experience">
        <button className="glowing-button" >Continue</button>
      </Link>
    </div>
  );
};

export default Projects;

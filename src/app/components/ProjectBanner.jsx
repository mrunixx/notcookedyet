import { useState, useEffect } from "react";

const ProjectBanner = ({ name, url, onClick }) => {
  const [input, setInput] = useState(url);

  useEffect(() => {
    const projectsJSON = localStorage.getItem("projects");

    if (projectsJSON) {
      const projects = JSON.parse(projectsJSON);
      const projectIndex = projects.findIndex((p) => p.name === name);
      if (projectIndex !== -1) {
        projects[projectIndex].url = input;
        localStorage.setItem("projects", JSON.stringify(projects));
      } 
    }
  }, [input]);

  return (
    <div className="course-banner flex">
      <div className="flex flex-col h-[5em] w-full bg-white text-black rounded-md flex py-2 px-5 justify-between">
        <p>{name}</p>
        <div className="flex justify-between items-center">
          <div className="link-input flex gap-2 w-full justify-center items-center">
            <img src="/link.png" alt="add url link for project" className="w-4 h-4" />
            <input
              type="text"
              name="url"
              placeholder="url to github repository or deployment"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full"
            />
          </div>
          <button
            className="trash-btn w-10 rounded-md mild-glowing-button h-[2em] self-end"
            onClick={() => onClick(name)}
          >
            &#8722;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;

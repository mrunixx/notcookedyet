"use client";

import MarkdownEditor from "@uiw/react-markdown-editor";
import MDPreview from "../components/MarkdownPreview";
import { useState } from "react";
import SplitPane from "react-split-pane";

const ResumeBuilderPage = () => {
  const personalDetails = JSON.parse(localStorage.getItem("personalDetails")) || {};
  const academicDetails = JSON.parse(localStorage.getItem("academicDetails")) || {};
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const experiences = JSON.parse(localStorage.getItem("experiences")) || [];

  const createProjectsMDText = () => {
    const mdStrings = [];
    for (const project of projects) {
      const mdString = `
### ${project.name} | Place relevant technologies here  <span class="project-url">${project.url}</span>

- Briefly describe your role in the project (e.g., Developer, Team Lead, Contributor).
- List the main technologies, tools, or frameworks you used (e.g., React, Node.js, Firebase, etc.).
- Quantify the results of your work 
`
      mdStrings.push(mdString);
    }
    return mdStrings.join('\n');
  }

  const [value, setValue] = useState(`
# ${personalDetails.firstName + " "} ${personalDetails.surname}

<div class="headerInfo">
${personalDetails.email}

|

${personalDetails.number}

|

${personalDetails.github}
</div>

## EDUCATION 
**${academicDetails.universityName}**

B. Computer Science, WAM: ${academicDetails.grade}

## PROJECTS

${createProjectsMDText()}

## EXPERIENCE & EXTRACURRICULARS 

## TECHINCAL SKILLS 

**Languages**: Please input application relevant languages you know here

**Technologies**: Please input application relevant technologies here
  `);
  
  return (
    <div className="main-page" style={{ height: "100vh", display: "flex" }}>
      <SplitPane split="vertical" defaultSize="50%" minSize={300} maxSize={-300} allowResize={false}>
        <div className="w-full h-full editor" style={{ height: "100%" }}>
          <MarkdownEditor
            value={value}
            height="100vh"
            showToolbar={false}
            onChange={(val) => setValue(val)}
            enablePreview={false}
            className="scrollable"
          />
        </div>
        <div className="w-full scrollable" style={{ padding: "2em 6em", overflowY: "auto", height: "100%" }}>
          <MDPreview source={value}/>
        </div>
      </SplitPane>
    </div>
  );
};

export default ResumeBuilderPage;

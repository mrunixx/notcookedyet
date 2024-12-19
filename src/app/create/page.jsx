"use client";

import MarkdownEditor from "@uiw/react-markdown-editor";
import MDPreview from "../components/MarkdownPreview";
import { useState } from "react";
import SplitPane from "react-split-pane";

const ResumeBuilderPage = () => {
  const personalDetails = JSON.parse(localStorage.getItem("personalDetails")) || {};
  const academicDetails = JSON.parse(localStorage.getItem("academicDetails")) || {};
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const experiences = JSON.parse(localStorage.getItem("experiences")) || [];

  const formatMonthYear = (date) => {
    if (!date) return "Ongoing";
    const [year, month] = date.split("-");
    const dateObj = new Date(year, month - 1);
    return dateObj.toLocaleString("default", { month: "short", year: "numeric" });
  };

  const createProjectsMDText = () => {
    const mdStrings = [];
    for (const project of projects) {
      const mdString = `
### ${project.name} | Place relevant technologies here  <span class="right-side">${project.url}</span>

- Briefly describe your role in the project (e.g., Developer, Team Lead, Contributor).
- List the main technologies, tools, or frameworks you used (e.g., React, Node.js, Firebase, etc.).
- Quantify the results of your work 
`;
      mdStrings.push(mdString);
    }
    return mdStrings.join("\n");
  };

  const createExperiencesMDText = () => {
    const mdStrings = [];
    for (const experience of experiences) {
      if (!experience.extracurricular) {
        const dateEnded = experience.ongoing ? "Ongoing" : formatMonthYear(experience.dateEnded);
        const mdString = `
### ${experience.org} - ${experience.role} <span class="right-side">${formatMonthYear(
          experience.dateStarted
        )} &mdash; ${dateEnded}</span>      

- Brief description of your role and key responsibilities.
- Mention measurable outcomes or specific skills developed as a result of your contributions.
- If needed, use a third point 
      `;
        mdStrings.push(mdString);
      }
    }

    return mdStrings.join("\n");
  };

  const createExtracurricularMDText = () => {
    const mdStrings = [];
    for (const experience of experiences) {
      if (experience.extracurricular) {
        const dateEnded = experience.ongoing ? "Ongoing" : formatMonthYear(experience.dateEnded);
        const mdString = `
### ${experience.org} - ${experience.role} <span class="right-side">${formatMonthYear(
          experience.dateStarted
        )} &mdash; ${dateEnded}</span>      

- Brief description of your role and key responsibilities.
- Mention measurable outcomes or specific skills developed as a result of your contributions.
      `;
        mdStrings.push(mdString);
      }
    }

    return mdStrings.join("\n");
  };

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
### ${academicDetails.universityName} <span class="right-side">Sydney, NSW</span>

B. Computer Science, WAM: ${academicDetails.grade}

## PROJECTS

${createProjectsMDText()}

## EXPERIENCE

${createExperiencesMDText()}

## EXTRACURRICULARS

${createExtracurricularMDText()}

## TECHINCAL SKILLS 

**Languages**: Please input application relevant languages you know here

**Technologies**: Please input application relevant technologies here
  `);

  return (
    <div className="main-page" style={{ height: "100vh", display: "flex" }}>
      <SplitPane
        split="vertical"
        defaultSize="50%"
        minSize={300}
        maxSize={-300}
        allowResize={false}
      >
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
        <div
          className="w-full scrollable"
          style={{ padding: "2em 6em", overflowY: "auto", height: "100%" }}
        >
          <MDPreview source={value} />
        </div>
      </SplitPane>
    </div>
  );
};

export default ResumeBuilderPage;

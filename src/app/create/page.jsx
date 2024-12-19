"use client";

import MarkdownEditor from "@uiw/react-markdown-editor";
import MDPreview from "../components/MarkdownPreview";
import { useState } from "react";
import SplitPane from "react-split-pane";

const ResumeBuilderPage = () => {
  const personalDetails = JSON.parse(localStorage.getItem("personalDetails")) || {};
  const academicDetails = JSON.parse(localStorage.getItem("academicDetails")) || {};
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const experiences = JSON.parse(localStorage.getItem("experiences")) || [];

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
<strong>${academicDetails.universityName}</strong>

B. Computer Science, WAM: ${academicDetails.grade}

## PROJECTS

## EXPERIENCE & EXTRACURRICULARS 

## TECHINCAL SKILLS 

<strong>Languages</strong>: Please input application relevant languages you know here

<strong>Technologies</strong>: Please input application relevant technologies here

`);
  return (
    <div className="main-page" style={{ height: "100vh", display: "flex" }}>
      <SplitPane split="vertical" defaultSize="50%" minSize={300} maxSize={-300} allowResize={false}>
        <div className="w-full h-full editor" style={{ height: "100%" }}>
          <MarkdownEditor
            value={value}
            height="90vh"
            showToolbar={false}
            onChange={(val) => setValue(val)}
            enablePreview={false}
            style={{ height: "100vh" }}
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

"use client";

import MarkdownEditor from "@uiw/react-markdown-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState } from "react";
import SplitPane from "react-split-pane";

const ResumeBuilderPage = () => {
  const personalDetails = JSON.parse(localStorage.getItem("personalDetails")) || {};
  const academicDetails = JSON.parse(localStorage.getItem("academicDetails")) || {};
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const experiences = JSON.parse(localStorage.getItem("experiences")) || [];

  const [value, setValue] = useState(`
  <div style="text-align: center;">

  # ${personalDetails.firstName + " "} ${personalDetails.surname}

  </div> 
  <div class="headerInfo" style="
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 1em; 
    text-decoration: none; 
    color: #000000;"
  >
  ${personalDetails.email}
  |
  ${personalDetails.number}
  |
  ${personalDetails.github}
  </div>

  ## EDUCATION 
  <strong>University of New South Wales</strong>

  B. Computer Science, WAM: ${academicDetails.grade}

  ## PROJECTS

  ## EXPERIENCE & EXTRACURRICULARS 

  ## TECHINCAL SKILLS 

  - <strong>Languages</strong>: Please input application relevant languages you know here
  - <strong>Technologies</strong>: Please input application relevant technologies here

`);
  return (
    <div className="main-page" style={{ height: "100vh", display: "flex" }}>
      <SplitPane split="vertical" defaultSize="50%" minSize={300} maxSize={-300}>
        <div className="w-full editor p-[2em]" style={{ height: "100%" }}>
          <MarkdownEditor
            value={value}
            height="90vh"
            showToolbar={false}
            onChange={(val) => setValue(val)}
            enablePreview={false}
          />
        </div>
        <div className="w-full preview" style={{ height: "100%", padding: "2em 6em" }}>
          <MarkdownPreview
            source={value}
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "2em",
              overflow: "auto",
              fontSize: "14px",
              height: "100%",
              fontFamily: "Times New Roman"
            }}
          />
        </div>
      </SplitPane>
    </div>
  );
};

export default ResumeBuilderPage;

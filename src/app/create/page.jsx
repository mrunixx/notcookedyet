"use client";
import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState } from "react";

const ResumeBuilderPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="main-page">
      <h1 style={{ fontSize: "2em" }}>Create Your Resume</h1>
      <div className="main-page-horizontal">
        <div className="main-left">
          <div data-color-mode="light">
            <MDEditor
              height={"85vh"}
              value={value}
              onChange={setValue}
              components={"textarea"}
              preview="edit"
            />
          </div>
        </div>
        <div className="main-right">
          <div data-color-mode="light">
            <MarkdownPreview height={"85vh"} source={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;

"use client";

import MarkdownEditor from "@uiw/react-markdown-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState } from "react";
import SplitPane from "react-split-pane";

const ResumeBuilderPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="main-page" style={{ height: "100vh", display: "flex" }}>
      <SplitPane split="vertical" defaultSize="50%" minSize={300} maxSize={-300}>
        <div className="w-full editor p-[2em]" style={{ height: "100%" }}>
          <MarkdownEditor 
            source={value}
            height="90vh"
            showToolbar={false}
            onChange={(val) => setValue(val)}
            enablePreview={false}
          />
        </div>
        <div className="w-full preview" style={{ height: "100%", padding: "2em 6em"}}>
          <MarkdownPreview
            source={value}
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "2em",
              overflow: "auto",
              fontSize: "14px",
              height: "100%"
            }}
          />
        </div>
      </SplitPane>
    </div>
  );
};

export default ResumeBuilderPage;

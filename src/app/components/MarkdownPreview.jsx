import MarkdownPreview from "@uiw/react-markdown-preview";
import "../preview.css"

const MDPreview = ({ source }) => {
  return (
    <div className="preview h-full">
      <MarkdownPreview
        source={source}
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "2em",
          overflow: "auto",
          fontSize: "14px",
          height: "100%",
          fontFamily: "Times New Roman",
        }}
        
      />
    </div>
  );
};

export default MDPreview;

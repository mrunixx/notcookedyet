const ProjectBanner = ({ name, onClick }) => {
  return (
    <div className="course-banner flex">
      <div className="flex flex-col h-[5em] w-full bg-white text-black rounded-md flex py-2 px-5 justify-between">
        <p>{name}</p>
        <div className="flex justify-between items-center">
          <button><img src="/link.png" alt="add url link for project" className="w-4"/></button>
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

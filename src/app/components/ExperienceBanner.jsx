const ExperienceBanner = ({ experience, onClick }) => {
  const formatMonthYear = (date) => {
    if (!date) return "Ongoing";
    const [year, month] = date.split("-");
    const dateObj = new Date(year, month - 1);
    return dateObj.toLocaleString("default", { month: "short", year: "numeric" });
  };

  return (
    <div className="experience-banner flex">
      <div className="flex flex-col h-[5em] w-full bg-white text-black rounded-md flex py-2 px-5 justify-center">
        <div className="flex justify-between items-center">
          <p>{experience.org}</p>
          <p>{formatMonthYear(experience.dateStarted)} &rarr; {experience.ongoing && <>Ongoing</>}{!experience.ongoing && formatMonthYear(experience.dateEnded)}</p>
        </div>
        <span className="form-hint" style={{color: "#000000"}}>{experience.role}</span>
        <div className="flex justify-end items-center">
          <button
            className="trash-btn w-10 rounded-md mild-glowing-button h-[2em] self-end"
            onClick={() => onClick(experience.org)}
          >
            &#8722;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBanner;

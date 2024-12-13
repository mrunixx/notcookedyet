const CourseBanner = ({ value, onClick}) => {

  return (
    <div className="course-banner flex gap-2">
      <div className="h-[2em] w-full bg-white text-black rounded-md flex items-center px-5">
        <p>{value}</p>
      </div>
      <button className="trash-btn w-10 rounded-md mild-glowing-button h-[2em]" onClick={() => onClick(value)}>
        &#8722;
      </button>
    </div>
  );
};

export default CourseBanner;

const CourseBanner = ({ value, courses, setCourses }) => {
  const handleClick = () => {
    const newCourses = [...courses];
    const index = newCourses.indexOf(value);
    newCourses.splice(index, 1);

    setCourses(newCourses)
  }

  return (
    <div className="course-banner flex gap-2">
      <div className="h-[2em] w-full bg-white text-black rounded-md flex items-center px-5">
        <p>{value}</p>
      </div>
      <button className="trash-btn w-12 bg-white rounded-md" onClick={handleClick}>
        <img src="/red-trash-can-icon.png" alt="Delete button for current course" style={{width: "1.5em"}}/>
      </button>
    </div>
  );
};

export default CourseBanner;

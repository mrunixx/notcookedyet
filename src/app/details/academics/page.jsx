"use client";
import { useState, useEffect, use, useDebugValue } from "react";
import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import Link from "next/link";
import UniversityAutoComplete from "../../components/UniversityAutoComplete";
import CourseBanner from "../../components/CourseBanner";

const Academics = () => {
  const [universityName, setUniversityName] = useState("");
  const [wam, setWam] = useState("");
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");

  useEffect(() => {
    console.log(universityName);
  }, [universityName]);

  const handleCourseAdd = (e) => {
    e.preventDefault();
    const newCourses = [...courses];
    newCourses.push(course);
    console.log(newCourses)
    setCourses(newCourses);
  }

  return (
    <div className="main-page">
      <TypeAnimationDetails>Let's now talk academics!</TypeAnimationDetails>
      <label className="details-input">
        University
        <UniversityAutoComplete value={universityName} setValue={setUniversityName} />
      </label>
      <label className="details-input">
        Current Grade
        <select
          name="wam-grade"
          className="text-black h-[2em] rounded-md"
          onChange={(e) => {
            setWam(e.target.value);
          }}
        >
          <option value="High Distinction">High Distinction</option>
          <option value="Distinction">Distinction</option>
          <option value="Credit">Credit</option>
          <option value="Pass">Pass</option>
        </select>
      </label>
      <label className="details-input gap-2">
        <p className="mb-2">
          High Achieving Courses
          <span className="form-hint">Total course mark greater than 80.</span>
        </p>
        {courses.map((course, index) => {
          return <CourseBanner key={index} value={course} courses={courses} setCourses={setCourses}/>
        })}
        <div className="flex justify-between gap-2">
          <input type="text" placeholder="e.g. Object Oriented Programming" value={course} onChange={(e) => {setCourse(e.target.value)}} className="w-full"/>
          <button className="w-10 h-[2em] flex justify-center items-center bg-white text-black rounded-md text-l mild-glowing-button" onClick={handleCourseAdd}>
            &#43;
          </button>
        </div>
      </label>
      <Link href={"/create"}>
        <button className="glowing-button">Continue</button>
      </Link>
    </div>
  );
};

export default Academics;

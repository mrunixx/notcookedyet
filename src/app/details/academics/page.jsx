"use client";
import { useState, useEffect, use, useDebugValue } from "react";
import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import Link from "next/link";
import UniversityAutoComplete from "../../components/UniversityAutoComplete";
import CourseBanner from "../../components/CourseBanner";

const Academics = () => {
  const [universityName, setUniversityName] = useState(() => {
    const storedData = localStorage.getItem("academicDetails");
    return storedData ? JSON.parse(storedData).universityName : "";
  });
  const [grade, setGrade] = useState(() => {
    const storedData = localStorage.getItem("academicDetails");
    return storedData ? JSON.parse(storedData).grade: "High Distinction";
  });
  const [courses, setCourses] = useState(() => {
    const storedData = localStorage.getItem("academicDetails");
    return storedData ? JSON.parse(storedData).courses: "";
  });
  const [course, setCourse] = useState("");

  const handleContinue = () => {
    const academicsObj = {
      universityName: universityName,
      grade: grade,
      courses: courses,
    };

    localStorage.setItem("academicDetails", JSON.stringify(academicsObj));
  };

  const handleCourseAdd = () => {
    const newCourses = [...courses];

    if (newCourses.length === 3) {
      return;
    }

    if (newCourses.includes(course) || course === "") {
      setCourse("");
      return;
    }

    newCourses.push(course);
    console.log(newCourses);
    setCourses(newCourses);

    setCourse("");
  };

  const handleCourseRemove = (value) => {
    const newCourses = [...courses];
    const index = newCourses.indexOf(value);
    newCourses.splice(index, 1);

    setCourses(newCourses);
  };

  const checkInputEnter = (e) => {
    if (e.key === "Enter") {
      handleCourseAdd();
    }
  };

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
          className="text-black h-[2em] rounded-md p-2"
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        >
          <option value="High Distinction">High Distinction</option>
          <option value="Distinction">Distinction</option>
          <option value="Credit">Credit</option>
          <option value="Pass">Pass</option>
        </select>
      </label>
      <div className="details-input gap-2">
        <p className="mb-2">
          High Achieving Courses
          <span className="form-hint"> Limit to 3 based on application.</span>
        </p>
        {courses.map((course, index) => {
          return <CourseBanner key={index} value={course} onClick={handleCourseRemove} />;
        })}
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="e.g. Object Oriented Programming (COMP2511)"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            className="w-full"
            onKeyDown={checkInputEnter}
          />
          <button
            className="w-10 h-[2em] flex justify-center items-center bg-white text-black rounded-md text-l mild-glowing-button"
            onClick={handleCourseAdd}
          >
            &#43;
          </button>
        </div>
      </div>
      <Link href={"/details/projects"}>
        <button className="glowing-button" onClick={handleContinue}>
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Academics;

"use client"
import { useState, useEffect } from "react";
import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import Link from "next/link";
import axios from "axios";
import UniversityAutoComplete from "../../components/UniversityAutoComplete";

const Academics = () => {
  const [universityName, setUniversityName] = useState("");
  // const [degree, setDegree] = useState(JSON.parse(localStorage.getItem("academicDetails")).degree || "");
  // const [wam, setWam] = useState(JSON.parse(localStorage.getItem("academicDetails")).wam || "");

  // useEffect(() => {
  //   const academicDetails = {
  //     universityName: universityName,
  //     degree: degree,
  //     wam: wam
  //   }
  //   localStorage.setItem("academicDetails", JSON.stringify(academicDetails));
  // }, [universityName, degree, wam]);


  return (
    <div className="main-page">
      <TypeAnimationDetails>Let's now talk academics!</TypeAnimationDetails>
      <label className="details-input">
        University
        <UniversityAutoComplete value={universityName} setValue={setUniversityName}/>
      </label>
      <Link href={"/create"}>
        <button className="glowing-button">Continue</button>
      </Link>
    </div>
  );
};

export default Academics;

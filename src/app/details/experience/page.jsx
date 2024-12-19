"use client";

import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import { useEffect, useState } from "react";
import ExperienceBanner from "../../components/ExperienceBanner";
import Link from "next/link";

const Experience = () => {
  const [experiences, setExperiences] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("experiences"));
    return localData ? localData : [];
  });
  const [ongoing, setOngoing] = useState(false);
  const [extracurricular, setExtracurricular] = useState(false);
  const [org, setOrg] = useState("");
  const [role, setRole] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");

  const handleOngoingCheckbox = (e) => {
    setOngoing(e.target.checked);
  };

  const handleExtraCheckbox = (e) => {
    setExtracurricular(e.target.checked);
  };
  
  const handleAddExperience = () => {
    const experience = {
      org: org,
      role: role,
      ongoing: ongoing,
      extracurricular: extracurricular,
      dateStarted: dateStarted,
      dateEnded: dateEnded,
    };

    const newExperiences = [...experiences];
    const index = newExperiences.find((e) => e.org === org);
    if (index) {
      return;
    }

    newExperiences.push(experience);

    setExperiences(newExperiences);
    setOrg("");
    setRole("");
    setDateEnded("");
    setDateStarted("");
    setOngoing(false);
  };

  const handleRemoveExperience = (org) => {
    const newExperiences = [...experiences];
    const index = newExperiences.findIndex((exp) => exp.org === org);

    if (index !== -1) {
      newExperiences.splice(index, 1);
      setExperiences(newExperiences);
    }
  };

  useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences));
  }, [experiences]);

  return (
    <div className="main-page-horizontal">
      <div className="main-left gap-2">
        <TypeAnimationDetails>Experience and Extra-curriculars</TypeAnimationDetails>
        <p>
          Experience and extracurriculars showcase your skills, adaptability, and personal growth.
          Work roles highlight professionalism and teamwork, while activities reflect leadership,
          balance, and diverse interests. Together, they demonstrate your drive and make you a
          well-rounded candidate.
        </p>
        <div className="flex flex-col">
          Experience / Extra-curricular
          <span className="form-hint">
            It is important that we only include experiences that provide some value to the
            recruiters rather than all of your experiences.
          </span>
        </div>
        <div className="details-input">
          <label className="flex flex-col justify-center w-full my-2">
            Company / Organisation
            <input
              type="text"
              name="project-input"
              className="w-full"
              placeholder="e.g CompClub"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
            />
          </label>
          <label className="flex items-center justify-end gap-2 w-full">
            <input
              type="checkbox"
              name="ongoing"
              id="ongoing-checkbox"
              checked={extracurricular}
              onChange={handleExtraCheckbox}
            />
            Extra-Curricular 
          </label>
          <label className="flex items-center justify-end gap-2 w-full">
            <input
              type="checkbox"
              name="ongoing"
              id="ongoing-checkbox"
              checked={ongoing}
              onChange={handleOngoingCheckbox}
            />
            Ongoing
          </label>
          <label className="flex flex-col justify-center w-full my-2">
            Role
            <input
              type="text"
              name="project-input"
              className="w-full"
              value={role}
              placeholder="e.g Director of Initiatives"
              onChange={(e) => setRole(e.target.value)}
            />
          </label>
          <label className="flex flex-col justify-center w-full my-2">
            <div className="flex justify-between items-center">Date</div>
            <div className="date-inputs flex justify-between w-full">
              <input
                type="month"
                name="data-started"
                id="date-input"
                value={dateStarted}
                onChange={(e) => setDateStarted(e.target.value)}
              />
              {!ongoing && (
                <>
                  &rarr;
                  <input
                    type="month"
                    name="data-ended"
                    id="date-input"
                    value={dateEnded}
                    onChange={(e) => setDateEnded(e.target.value)}
                  />
                </>
              )}
            </div>
          </label>
          <button
            className="trash-btn w-full rounded-md mild-glowing-button h-[2em] self-end"
            onClick={handleAddExperience}
          >
            &#43;
          </button>
          <Link href="/create" className="flex justify-end my-2">
            <button className="glowing-button">Continue</button>
          </Link>
        </div>
      </div>
      <div className="main-right">
        {experiences.map((experience, index) => {
          return (
            <ExperienceBanner
              key={index}
              experience={experience}
              onClick={handleRemoveExperience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

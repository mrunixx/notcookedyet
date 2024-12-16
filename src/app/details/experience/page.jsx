"use client";

import TypeAnimationDetails from "../../components/TypeAnimationDetails";
import { useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [ongoing, setOngoing] = useState(false);

  const handleOngoingCheckbox = (e) => {
    setOngoing(e.target.checked);
  };

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
            It is important that we include experience that provide some value to the recruiters
            rather than all of your experiences.
          </span>
        </div>
        <div className="details-input">
          <label className="flex flex-col justify-center w-full my-2">
            Company / Organisation
            <input type="text" name="project-input" className="w-full" placeholder="e.g CompClub" />
          </label>
          <label className="flex flex-col justify-center w-full my-2">
            Role
            <input
              type="text"
              name="project-input"
              className="w-full"
              placeholder="e.g Director of Initiatives"
            />
          </label>
          <label className="flex flex-col justify-center w-full my-2">
            <div className="flex justify-between items-center">
              Date
              <label className="flex items-center justify-end gap-2 w-full">
                <input
                  type="checkbox"
                  name="ongoing"
                  id="ongoing-checkbox"
                  value={ongoing}
                  onChange={handleOngoingCheckbox}
                />
                Ongoing
              </label>
            </div>
            <div className="date-inputs flex justify-between w-full">
              <input type="date" name="data-started" id="date-input" />
              {!ongoing && (
                <>
                  &rarr;
                  <input type="date" name="data-ended" id="date-input" />
                </>
              )}
            </div>
          </label>
          <button className="trash-btn w-full rounded-md mild-glowing-button h-[2em] self-end">
            &#43;
          </button>
        </div>
      </div>
      <div className="main-right">
        {experiences.map((experience, index) => {
          return <ExperienceBanner key={index} experience={experience} />;
        })}
      </div>
    </div>
  );
};

export default Experience;

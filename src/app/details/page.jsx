"use client";
import { useEffect, useState } from "react";
import TypeAnimationDetails from "../components/TypeAnimationDetails";
import Link from "next/link";

const Identity = () => {
  const [firstName, setFirstName] = useState(JSON.parse(localStorage.getItem("personalDetails")).firstName || "");
  const [surname, setSurname] = useState(JSON.parse(localStorage.getItem("personalDetails")).surname || "");
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("personalDetails")).email || "");
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem("personalDetails")).number || "");
  const [github, setGithub] = useState(JSON.parse(localStorage.getItem("personalDetails")).github || "");

  useEffect(() => {
    const personalDetails = {
      firstName: firstName,
      surname: surname,
      email: email,
      number: number,
      github: github
    }
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
  }, [firstName, surname, email, number, github]);

  return (
    <div className="main-page">
      <TypeAnimationDetails>Let's get to know you first!</TypeAnimationDetails>
      <div className="name-input-div">
        <label className="details-input">
          First Name
          <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label className="details-input">
          Last Name
          <input type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
      </div>
      <label className="details-input">
        <p>
          Email
          <span className="form-hint">Make sure the email is professional!</span>
        </p>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label className="details-input">
        Phone Number
        <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      </label>
      <label className="details-input">
        Github
        <input type="text" name="github" value={github} onChange={(e) => setGithub(e.target.value)}/>
      </label>
      <Link href={"/"}>
        <button className="glowing-button">Continue</button>
      </Link>
    </div>
  );
};

export default Identity;

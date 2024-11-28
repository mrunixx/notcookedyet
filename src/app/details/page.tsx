"use client";
import TypeAnimationDetails from "../components/TypeAnimationDetails";

const Identity = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center w-max">
      <TypeAnimationDetails>Let's get to know you first!</TypeAnimationDetails>
      <div className="flex gap-2 w-full justify-center items-center">
        <label className="details-input">
          First Name
          <input className="w-full focus:border-none" type="text" name="firstName" />
        </label>
        <label className="details-input">
          Last Name
          <input className="w-full focus:border-none" type="text" name="surname" />
        </label>
      </div>
      <label className="details-input">
        Email
        <input className="w-full focus:border-none" type="text" name="email" />
      </label>
      <label className="details-input">
        Phone Number
        <input className="w-full focus:border-none" type="text" name="number" />
      </label>
      <label className="details-input">
        Github
        <input className="w-full focus:border-none" type="text" name="github" />
      </label>
    </div>
  );
};

export default Identity;

"use client";
import GetStartedBtn from "./components/GetStartedBtn";
import TypeAnimationLandingText from "./components/TypeAnimationText";

export default function Home() {
  return (
    <div className="main-page">
      <div>
        <p className="website-name">not cooked yet.</p>
        <TypeAnimationLandingText />
      </div>
      <GetStartedBtn />
    </div>
  );
}

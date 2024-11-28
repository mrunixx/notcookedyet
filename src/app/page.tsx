"use client";
import GetStartedBtn from "./components/GetStartedBtn";
import TypeAnimationLandingText from "./components/TypeAnimationText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <div>
        <p className="text-5xl">not cooked yet.</p>
        <TypeAnimationLandingText />
      </div>
      <GetStartedBtn />
    </div>
  );
}

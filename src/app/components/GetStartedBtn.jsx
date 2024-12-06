"use client";
import Link from "next/link";

const GetStartedBtn = () => {
  return (
    <Link href={"/details"}>
      <button
        className="glowing-button"
      >
        Get Started &rarr;
      </button>
    </Link>
  );
};

export default GetStartedBtn;

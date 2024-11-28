"use client";
import Link from "next/link";

const GetStartedBtn = () => {
  return (
    <Link href={"/details"}>
      <button
        className="bg-white text-black px-5 py-2 rounded-lg 
        transition duration-300 relative 
        hover:before:content-[''] hover:before:absolute hover:before:inset-0 
        hover:before:rounded-lg hover:before:bg-gradient-to-r 
        hover:before:from-[#8A00C4] hover:before:via-[#C77DFF] hover:before:to-[#E7CFFF] 
        hover:before:blur-md hover:before:-z-10"
      >
        Get Started &rarr;
      </button>
    </Link>
  );
};

export default GetStartedBtn;

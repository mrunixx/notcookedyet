import { TypeAnimation } from "react-type-animation";

const TypeAnimationLandingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "achieve your goals.",
        1000,
        "find a job.",
        1000,
        "succeed.",
        1000,
        "defy expectations.",
        1000,
        "shape your future.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1.2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationLandingText;
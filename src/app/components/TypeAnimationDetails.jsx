import { TypeAnimation } from "react-type-animation";

const TypeAnimationDetails = ({children}) => {
  return (
    <TypeAnimation
      sequence={[
        `${children}`
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};

export default TypeAnimationDetails

import { useEffect, useState } from "react";

const About = () => {
  const [trigger, setTrigger] = useState(true);

  console.log(trigger);

  const handleTrigger = () => {
    setTrigger(!trigger);
  };

  useEffect(() => {
    console.log("useEffect is triggered.");
  }, [trigger]);

  return (
    <>
      <h2>Here is the button</h2>
      <button onClick={handleTrigger}>Trigger Button</button>
    </>
  );
};

export default About;

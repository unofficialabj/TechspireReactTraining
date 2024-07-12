import { useMemo, useState } from "react";

const Contact = () => {
  const [trigger, setTrigger] = useState(true);

  const component = useMemo(() => {
    if (trigger) {
      return <h1>Hello</h1>;
    } else {
      return <h1>World</h1>;
    }
  }, [trigger]);
  return (
    <div>
      <h1>{component}</h1>
    </div>
  );
};

export default Contact;

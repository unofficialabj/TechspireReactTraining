import { useState } from "react";

const About = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const buttonHandler = () => {
    setTask([...task, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h1>To do list</h1>
      <input
        placeholder="Enter your task here"
        // value={inputValue}
        onChange={inputHandler}
      />
      <button onClick={buttonHandler}>Add Task</button>
      <br />
      <br />
      <h4 style={{ color: "red" }}>Here is the list of your task:</h4>

      {task.length == 0 ? (
        <h4>No task in the list</h4>
      ) : (
        task.map((item, index) => (
          <h5 key={index}>
            {index + 1}. {item}
          </h5>
        ))
      )}
    </>
  );
};

export default About;

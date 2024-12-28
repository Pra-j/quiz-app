import { useState } from "react";

function Options({ question, answer, dispatch }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  function handleClick(index) {
    setSelectedOption(index);
    setHasAnswered(true);
    dispatch({ type: "pauseTimer" });
  }

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${
            hasAnswered
              ? index === selectedOption
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
              : ""
          }`}
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

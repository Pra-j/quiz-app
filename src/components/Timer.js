import { useState, useEffect } from "react";

function Timer({ dispatch, secondsRemaining, timer }) {
  const [isActive, setIsActive] = useState(false); // Track whether the timer is active

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    if (!isActive) return;

    const id = setInterval(function () {
      dispatch({ type: "decreaseTimer" });
    }, 1000);

    return () => clearInterval(id);
  }, [isActive, dispatch]);

  function startTimer() {
    setIsActive(true);
  }

  return (
    <div className="timer-container">
      <div className="timer">{`${String(mins).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`}</div>
      <button
        className={`btn btn-ui ${isActive ? "hidden" : ""}`}
        onClick={startTimer}
      >
        Start Timer
      </button>
    </div>
  );
}

export default Timer;

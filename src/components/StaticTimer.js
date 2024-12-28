function StaticTimer({ secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  return (
    <div className="timer-container">
      <div className="timer">{`${String(mins).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`}</div>
    </div>
  );
}

export default StaticTimer;

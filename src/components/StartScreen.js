function StartScreen({
  numQuestions,
  handleCategory,
  handleQuestionNumber,
  category,
  dotnetAskedQuestions,
  generalKnowledgeAskedQuestions,
  iqAskedQuestions,
  currentAffairsAskedQuestions,
}) {
  const totalQuestions = Array.from({ length: numQuestions }, (_, i) => i + 1);

  const askedQuestions =
    category === "dotnet"
      ? dotnetAskedQuestions
      : category === "generalKnowledge"
      ? generalKnowledgeAskedQuestions
      : category === "iq"
      ? iqAskedQuestions
      : currentAffairsAskedQuestions;

  return (
    <div className="start">
      <h2>Welcome to the QuizApp.</h2>
      <select className="quiz-category" onChange={handleCategory}>
        <option value="dotnet">DotNet</option>
        <option value="generalKnowledge">General Knowledge</option>
        <option value="iq">IQ</option>
        <option value="currentAffairs">Current Affairs</option>
      </select>
      <form onSubmit={handleQuestionNumber}>
        <input
          name="number"
          type="number"
          className="num-input"
          placeholder={`Number between 1 and ${numQuestions}`}
          min="1"
          max={numQuestions}
          required
        />
        <button type="submit" className="btn ">
          Submit
        </button>
      </form>

      <p className="remaining-questions-topic">Remaining Questions:</p>
      <div className="remaining-questions-container">
        {totalQuestions.map((question) => (
          <p
            key={question}
            className={
              askedQuestions.includes(question)
                ? "remaining-question asked"
                : "remaining-question"
            }
          >
            {question}
          </p>
        ))}
      </div>
    </div>
  );
}

export default StartScreen;

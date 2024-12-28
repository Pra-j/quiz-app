// import Options from "./Options";

function Question({ question, children }) {
  return (
    <div>
      <h4>{question.question}</h4>
      {children}
    </div>
  );
}

export default Question;

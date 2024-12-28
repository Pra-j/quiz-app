function NextButton({ dispatch, answer, index, numQuestions }) {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}

export default NextButton;

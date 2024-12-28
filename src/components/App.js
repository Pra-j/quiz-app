import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Options from "./Options";
import NextButton from "./NextButton";
import Timer from "./Timer";
import Footer from "./Footer";
import Copyright from "./Copyright";
import StaticTimer from "./StaticTimer";

const initialState = {
  questions: [],
  dotnetAskedQuestions: [],
  generalKnowledgeAskedQuestions: [],
  iqAskedQuestions: [],
  currentAffairsAskedQuestions: [],
  category: "dotnet",
  status: "loading",
  timer: true,
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "selectCategory":
      return {
        ...state,
        category: action.payload,
      };

    case "handleQuestionNumber":
      return {
        ...state,
        status: "active",
        index: action.payload - 1,
        points: 0,
        timer: true,
        answer: null,
        secondsRemaining: 30,
        dotnetAskedQuestions:
          state.category === "dotnet"
            ? [...state.dotnetAskedQuestions, action.payload]
            : state.dotnetAskedQuestions,
        generalKnowledgeAskedQuestions:
          state.category === "generalKnowledge"
            ? [...state.generalKnowledgeAskedQuestions, action.payload]
            : state.generalKnowledgeAskedQuestions,
        iqAskedQuestions:
          state.category === "iq"
            ? [...state.iqAskedQuestions, action.payload]
            : state.iqAskedQuestions,
        currentAffairsAskedQuestions:
          state.category === "currentAffairs"
            ? [...state.currentAffairsAskedQuestions, action.payload]
            : state.currentAffairsAskedQuestions,
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "correctAns":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "ready",
        category: "dotnet",
      };

    case "pauseTimer":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining,
        timer: false,
      };

    case "resumeTimer":
      return {
        ...state,
        timer: true,
      };

    case "decreaseTimer":
      return {
        ...state,
        status: "active",
        secondsRemaining:
          state.secondsRemaining === 0 ? 0 : state.secondsRemaining - 1,
      };

    default:
      throw new Error("Unknown action type.");
  }
}

function App() {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      timer,
      secondsRemaining,
      category,
      dotnetAskedQuestions,
      generalKnowledgeAskedQuestions,
      iqAskedQuestions,
      currentAffairsAskedQuestions,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  function handleCategory(e) {
    dispatch({ type: "selectCategory", payload: e.target.value });
  }

  function handleQuestionNumber(e) {
    e.preventDefault();
    dispatch({
      type: "handleQuestionNumber",
      payload: Number(e.target.elements.number.value),
    });
  }

  function handleStart() {
    dispatch({ type: "startQuiz" });
  }

  useEffect(
    function () {
      async function fetchQuestion() {
        try {
          const res = await fetch(
            `https://quiz-app-advanced.netlify.app/.netlify/functions/${category}`
          );
          const questions = await res.json();
          dispatch({ type: "dataReceived", payload: questions });
        } catch (err) {
          dispatch({ type: "dataFailed" });
        }
      }

      fetchQuestion();
    },
    [category]
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            handleStart={handleStart}
            handleCategory={handleCategory}
            handleQuestionNumber={handleQuestionNumber}
            dotnetAskedQuestions={dotnetAskedQuestions}
            generalKnowledgeAskedQuestions={generalKnowledgeAskedQuestions}
            iqAskedQuestions={iqAskedQuestions}
            currentAffairsAskedQuestions={currentAffairsAskedQuestions}
            category={category}
          />
        )}
        {status === "active" && (
          <>
            <Question question={questions[index]}>
              <Options
                question={questions[index]}
                answer={answer}
                dispatch={dispatch}
              />
            </Question>
            <Footer>
              {timer ? (
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                  timer={timer}
                />
              ) : (
                <StaticTimer secondsRemaining={secondsRemaining} />
              )}
              <NextButton
                dispatch={dispatch}
                answer={answer}
                points={points}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
      </Main>
      <Copyright />
    </div>
  );
}

export default App;

import Header from "./componant/Header";
import Main from "./componant/Main";
import Loader from "./componant/Loader";
import Error from "./componant/Error";
import StartScreen from "./componant/StartScreen";
import Question from "./componant/Question";
import NextButton from "./componant/NextButton";
import Progress from "./componant/Progress";
import Finally from "./componant/Finally";
import Timer from "./componant/Timer";
import useQuiz from "./context/useQuiz";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}

        {status === "active" && (
          <>
            <Progress />
            <Question />
            <footer>
              <Timer />
              <NextButton />
            </footer>
          </>
        )}
        {status === "finished" && <Finally />}
      </Main>
    </div>
  );
}

import { useEffect, useState } from "react";
import Questions from "../components/Questions";
import Results from "../components/Results";

function Trivia() {
  // States
  const [questions, setQuestions] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState([]);
  const [isNewGame, setIsNewGame] = useState(false);

  useEffect(() => {
    // Getting data
    async function getData() {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      const data = await response.json();
      setQuestions(data.results);
      // restart game
      setIsNewGame(false);
      // show results
      setIsTrue(true);
    }
    getData();
  }, []);

  // Handling correct answer
  function onChange(event) {
    if (index == 9) {
      setIndex(9);
      setIsTrue(false);
      setIsNewGame(true);
    }
    if (event.currentTarget.id == questions[index].correct_answer) {
      setResult((prevResult) => [
        ...prevResult,
        `+ ${questions[index].question
          .replaceAll("&#039;", "'")
          .replaceAll("&quot;", `"`)}`,
      ]);
      setScore(score + 1);
    } else {
      setResult((prevResult) => [
        ...prevResult,
        `- ${questions[index].question
          .replaceAll("&#039;", "'")
          .replaceAll("&quot;", `"`)}`,
      ]);
    }
    setIndex(index + 1);
  }

  return (
    <div className="bg-gray-300">
      {isTrue && (
        <Questions questions={questions} onChange={onChange} index={index} />
      )}
      {isNewGame && (
        <Results
          result={result}
          score={score}
          questionsLength={questions.length}
        />
      )}
    </div>
  );
}

export default Trivia;

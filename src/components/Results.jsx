import { Link } from "react-router-dom";

function Results({ result, score, questionsLength }) {
  return (
    <div className="h-screen  w-2/4 flex flex-col justify-center mx-auto space-y-4">
      <p className="font-bold text-2xl text-center pb-8">
        You score {`${score} / ${questionsLength}`}
      </p>
      {result.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
      <Link className="text-center text-xl pt-8" to="/">
        PLAY AGAIN ?
      </Link>
    </div>
  );
}

export default Results;

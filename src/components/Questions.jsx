function Questions({ questions, onChange, index }) {
  return (
    <div className="h-screen flex flex-col justify-between items-center py-4 w-3/4 mx-auto">
      <p className="font-bold text-2xl text-center">
        {questions[index].category}
      </p>
      <div className="border-4 border-black w-2/4 h-2/4 text-center flex flex-col">
        <div className="flex flex-col my-auto space-y-4">
          <p className="w-3/4 mx-auto">
            {questions[index].question
              .replaceAll("&#039;", "'")
              .replaceAll("&quot;", `"`)}
          </p>
          <div className="flex justify-center space-x-8">
            <button id="True" className="font-bold" onClick={onChange}>
              True
            </button>
            <button id="False" className="font-bold" onClick={onChange}>
              False
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl">
        {index + 1} of {questions.length}
      </p>
    </div>
  );
}

export default Questions;

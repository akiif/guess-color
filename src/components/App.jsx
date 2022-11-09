import React from "react";
import ColorBox from "./ColorBox";
import GuessButton from "./GuessButton";
import Answer from "./Answer";
import { useSelector, useDispatch } from "react-redux";

function getRandomColor() {
  const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  let color = new Array(6)
    .fill('')
    .map(() => hex[Math.floor(Math.random() * 16)])
    .join("");

  return `#${color}`;
}

function App() {

  const { answer, colors } = useSelector((state) => state.colors);
  const { result } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <header className="Heading">Guess the color</header>
      <ColorBox backgroundColor={answer}/>
      <div className="guess-btn-section">
        {colors.map(color =>
          <GuessButton
            key={color} color={color}
          />
        )}
      </div>
      {result == "correct" && <Answer id="correct-answer" content="Correct Answer" />}
      {result == "wrong" && <Answer id="wrong-answer" content="Wrong Answer" />}
    </div>
  );
}

export default App;

export { getRandomColor };
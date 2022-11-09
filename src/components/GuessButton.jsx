import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResult, setDisabled } from "../features/result/resultSlice";
import { generateColors } from "../features/colors/colorsSlice";

function GuessButton(props) {

    const { answer } = useSelector((state) => state.colors);
    const { disabled } = useSelector((state) => state.result);
    const dispatch = useDispatch();

    function evaluateSubmittedAnswer(selectedColor) {
        if (answer == selectedColor) {
            dispatch(setResult("correct"));
            dispatch(setDisabled(true));
            setTimeout(() => {
                dispatch(generateColors());
                dispatch(setResult(""));
                dispatch(setDisabled(false));
            }, 800);
        } else {
            dispatch(setResult("wrong"));
        }
    }

    return (
        <button
            onClick={() => evaluateSubmittedAnswer(props.color)}
            className="guess-btn"
            disabled={disabled}
            >
            {props.color}
        </button>
    )
}

export default GuessButton;
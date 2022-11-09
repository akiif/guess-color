import { createSlice } from "@reduxjs/toolkit";
import { getRandomColor } from "../../components/App";

const answer = getRandomColor();

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

const initialState = {
    colors: shuffle([answer, getRandomColor(), getRandomColor()]),
    answer: answer,
};

const colorSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {
        generateColors: (state) => {
            state.answer = getRandomColor();
            state.colors = shuffle([
                state.answer,
                getRandomColor(),
                getRandomColor(),
            ]);
        },
    },
});

export const { generateColors } = colorSlice.actions;

export default colorSlice.reducer;

import React from "react";

function Answer(props) {
    return (
        <p className={[props.id, "answer"].join(" ")} id={props.id}>{props.content}</p>
    );
}

export default Answer;
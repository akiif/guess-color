import React from "react";

function ColorBox(props) {
    const style = {
        backgroundColor: props.backgroundColor,
    }
    return (
        <div className="color-box" id="color-box" style={style} ></div>
    );
}

export default ColorBox;
import React from "react";

const CustomButton = (props) => {
    return (
        <button onClick={props.action} className="pure-material-button">{props.text}</button>
    )

}

export default CustomButton;
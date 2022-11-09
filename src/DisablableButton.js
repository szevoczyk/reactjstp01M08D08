import React, {useState} from "react";

const DisablableButton = (props) => {

    const [boolValue,setBoolValue] = useState(false);

    const handleClick = event => {
        setBoolValue(true);
        console.log('button disabled');
    };
    return (
        <button onClick={handleClick} disabled={boolValue} className="pure-material-button">{props.text}</button>
    )

}

export default DisablableButton;
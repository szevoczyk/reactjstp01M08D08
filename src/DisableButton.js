import React, {useState,useRef} from "react";

const DisableButton = (props) => {

    const [boolValue,setBoolValue] = useState(false);
    let boolRef = useRef(null);

    const handleClick = event => {
        setBoolValue(true);
        console.log('button disabled');
    };
    return (
        <button onClick={handleClick}  ref={boolRef} disabled={boolValue} className="pure-material-button">{props.text}</button>
    )

}

export default DisableButton;
import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const NewPeople = (props) => {

    const [concat,setConcat] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    const handleTextFieldChange = (e) => {
        console.log(e.target.name);
        if(e.target.name==="lastName"){
            setLastName(e.target.value);
        }
        if(e.target.name==="firstName"){
            setFirstName(e.target.value);
        }
        // setconcat(e.target.value);
        // setconcat(lastname.value + " " +firstname.value);
        // console.log(concat);
        setConcat(firstName+' '+lastName);
    };

    return (
        <div>
            <TextField name="lastName" label="Nom" variant="standard" onChange={handleTextFieldChange}/>
            <TextField name="firstName" label="Prénom" variant="standard" onChange={handleTextFieldChange}/>
            <p>{concat}</p>
        </div>
        
    )

}

export default NewPeople;
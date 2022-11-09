import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const NewPeople = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    return (
        <div>
            <TextField name="lastName" label="Nom" variant="standard" onChange={(e) => setLastName(e.target.value)}/>
            <TextField name="firstName" label="Prénom" variant="standard" onChange={(e) => setFirstName(e.target.value)}/>
            <p>{firstName+' '+lastName}</p>
        </div>
        
    )

}

export default NewPeople;
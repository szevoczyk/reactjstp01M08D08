import { Input } from "@material-ui/core";
import React, { useState } from "react";

const NewPeople2 = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    return (
        <div>
            <Input name="lastName" placeholder="Nom"  onChange={(e) => setLastName(e.target.value)}/>
            <Input name="firstName" placeholder="Prénom"  onChange={(e) => setFirstName(e.target.value)}/>
            <p>{firstName+' '+lastName}</p>
        </div>
        
    )

}

export default NewPeople2;
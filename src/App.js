import React from "react";

import "./styles.css";
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import Button from '@material-ui/core/Button';  
import DisablableButton from "./DisablableButton";
import NewPeople from "./NewPeople";

const App = () => {
  return (
    <div className="App">
      <h1>TP React</h1>
      <p>Start editing to see some magic happen!</p>
      <CustomButton
        text="Click-me !"
        action={() => alert("You just click me :o")}
      />
      <br/>
      <TextInput />
      <br />
      <Button
        onClick={() => {
          console.log("clic sur le nouveau bouton");
        }}
      >
        Click me
      </Button>
      <br/>
      <DisablableButton 
        text="Disable-me !" />
      <br/>
      <DisablableButton
        text="Don't disable-me !" />
      <br/>
      <DisablableButton
        text="Disable-me !" />
      <br/>
      <NewPeople />
    </div>
  );
};

export default App;

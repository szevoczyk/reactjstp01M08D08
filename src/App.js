import React from "react";

import "./styles.css";
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import Button from '@material-ui/core/Button';  
import DisablableButton from "./DisableButton";
import NewPeople from "./NewPeople";
import NewPeople2 from "./NewPeople2";
import NavBar from "./NavBar";
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Country from "./Country";

const App = () => {

  const { name } = useParams()

  return (
    <div className="App">
      <h1>TP React</h1>
      <NavBar/>
      <br/>
        <Routes>
            <Route path="/exercice/1" element={<CustomButton
                text="Click-me !"
                action={() => alert("You just click me :o")}
                />}/>
            <Route path="/exercice/2" element={<TextInput />}/>
            <Route path="/exercice/3" element={<Button
              onClick={() => {
                console.log("clic sur le nouveau bouton");
              }}
              >
                Click me
              </Button>}/>
              <Route path="/exercice/4" element={<div>
                <DisablableButton 
                  text="Disable-me !" />
                <br/>
                <DisablableButton
                  text="Don't disable-me !" />
                <br/>
                <DisablableButton
                  text="Disable-me !" />
                <br/>
                <CustomButton
                text="Enable all buttons"
                action={() => alert("")} //boolRef.current.setBoolValue(false)}
                />
                </div>}/>
                <Route path="/exercice/5" element={<NewPeople />}/>
                <Route path="/exercice/6" element={<NewPeople2 />}/>
                <Route path="/country/:name" element={<Country />}/> 
        </Routes>  
    </div>
  );
};

export default App;

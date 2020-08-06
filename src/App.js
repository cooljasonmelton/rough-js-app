import React, {useState} from 'react';
import './App.css';

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";



const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="App">

      <RoughNotation onClick={()=>setShow(!show)} 
        type="underline" 
        color="red"
        customElement={"h1"}
        show={show}>
        JASON MELTON
      </RoughNotation>
      <RoughNotation onClick={()=>setShow(!show)} 
        strokeWidth={20}
        type="box" 
        show={show}>
        JASON MELTON
      </RoughNotation>
      <RoughNotation onClick={()=>setShow(!show)} 
        type="circle" 
        padding={25}
        show={show}>
        JASON MELTON
      </RoughNotation>
      <RoughNotation onClick={()=>setShow(!show)} 
        type="highlight" 
        color="pink"
        brackets=""
        show={show}>

        <p> jason melton </p>
        <p> jason melton </p>
        <p> jason melton </p>

      </RoughNotation>
      <RoughNotation onClick={()=>setShow(!show)} 
        type="bracket" 
        color="orange"
        brackets={["right", "left", "top", "bottom"]}
        show={show}>
          jason<br/>
          Jason <br/>
          JASON

      </RoughNotation>

      <RoughNotationGroup show={show}>
        <RoughNotation type="underline" order="3">
          Hello,
        </RoughNotation>
        <RoughNotation type="underline" order="2">
          This is
        </RoughNotation>
        <RoughNotation type="underline" order="1">
          a Test
        </RoughNotation>
      </RoughNotationGroup>
    
    



    </div>
  );
}

export default App;

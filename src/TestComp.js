import React, {useState} from 'react';
import './App.css';

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const TestComp = () => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(1)


  return (
    <div className="TestComp" >
      <div className="tripwire" 
        onMouseEnter={()=>setActive(1)}
        onMouseLeave={()=>setActive(null)}>

        <RoughNotation onClick={()=>setShow(!show)} 
          type="underline" 
          color="red"
          customElement={"h1"}
          show={show || active === 1}>
          JASON MELTON
        </RoughNotation>

      </div>

      <div className="tripwire" 
        onMouseEnter={()=>setActive(2)}
        onMouseLeave={()=>setActive(null)}>

        <RoughNotation onClick={()=>setShow(!show)} 
          strokeWidth={20}
          type="box" 
          show={show || active === 2}>
          JASON MELTON
        </RoughNotation>

      </div>

      <div className="tripwire" 
        onMouseEnter={()=>setActive(3)}
        onMouseLeave={()=>setActive(null)}>
      <RoughNotation onClick={()=>setShow(!show)} 
        type="circle" 
        padding={25}
        show={show || active === 3}>
        JASON MELTON
      </RoughNotation>

      </div>

      <div className="tripwire" 
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}>

      <RoughNotation onClick={()=>setShow(!show)} 
        type="highlight" 
        color="pink"
        brackets=""
        show={show}>

        <p> jason melton </p>
        <p> jason melton </p>
        <p> jason melton </p>

      </RoughNotation>

      </div>
      
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

export default TestComp;

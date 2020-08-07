import React, { useState } from 'react';
import './Fact1.css';

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const Fact1 = () => {
  return (
    <div className="Fact1 fact-container" >
      <h1> Fact 1 </h1>
      <div className="fact-itself">
        <RoughNotationGroup show={true}>
          <p><b>Dolphins</b> can hold their breath for
            <RoughNotation type="underline" order="1">
              <RoughNotation type="circle" order="2" color="orange">
                {" 8 "}           
              </RoughNotation>
              to
              <RoughNotation type="circle" order="2" color="orange">
                {" 10 "}           
              </RoughNotation>
              minutes.
            </RoughNotation>             
          </p>
          <br/>
          <p>about as long as it would take a <b>person</b> to
            <RoughNotation type="underline" order="3">
              {" drown"} 
                <RoughNotation type="circle" order="4" color="orange">
                  {" 7 "}
                </RoughNotation>
              times
            </RoughNotation>
        </p>
        </RoughNotationGroup>
      </div>

    </div>
  );
}

export default Fact1;

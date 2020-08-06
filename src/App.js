import React from 'react';
import './App.css';

import ReactRough, { Rectangle } from 'react-rough';


const App = () => {

  return (
    <div className="App">
      <h1>Rectangle</h1>
      <div>
        <ReactRough>
          <Rectangle x={15} y={15} width={100} height={100} fill="#151515" />
        </ReactRough>
      </div>
      



    </div>
  );
}

export default App;


import React, {useState} from "react";
import DisplayComponents from './Components/DisplayComponents';
import BtnComponent from "./Components/BtnComponent";
import "./App.css";


function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started =0
  // started = 1
  // paus = 0

  const start =() =>{
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run =() =>{
   if (updatedM === 60 ){
    updatedH++;
    updatedM=0;
   }
  if (updatedS === 60)
  {
    updatedM++;
  updatedS=0;
  }
  if (updatedMs ===100){
    updatedS++;
    updatedMs=0;
  }
  updatedMs++;
return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  
  const pause =() =>{
    clearInterval(interv);
    setStatus(2);
    
  };
  const reset =() =>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0 , s:0, m:0, h:0})
  };
  const resume =() => start();
  return (
   
     <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
         <DisplayComponents time={time}></DisplayComponents>
        <BtnComponent status={status} resume={resume} reset={reset} pause={pause} start={start}></BtnComponent>
        </div>

      </div>
     </div>
  );
}

export default App;

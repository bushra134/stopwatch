import React from "react";

function DisplayComponents(props) {
  const h =() => {
   if (props.time.h === 0){
    return '';
   }else 
   return <span> {(props.time.h >= 10)? props.time.h: "0"+ props.time.h}</span>;
  }
  return (
   
     <div style={{marginTop:-50}}>
      {h()}&nbsp;&nbsp;
      <span style={{fontSize:50,color:'#FF8551'}}>{(props.time.m >= 10)? props.time.m: "0"+ props.time.m}</span>
      <span style={{fontSize:50,color:'#FF8551',borderRadius:0}}>:</span>
      <span style={{fontSize:50,color:'#FF8551'}}>{(props.time.s >= 10)? props.time.s: "0"+ props.time.s}</span>
      <span style={{fontSize:50,color:'#FF8551'}}>:</span>
      <span style={{fontSize:50,color:'blue'}}>{(props.time.ms >= 10)? props.time.ms: "0"+ props.time.ms}</span>
     </div>
  );
}

export default  DisplayComponents;

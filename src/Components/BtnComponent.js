import React from "react";

function BtnComponent(props) {
  return (
   
     <div>
      
      {(props.status === 0)?
      <button style={{fontSize:20,padding:7,paddingLeft:50,paddingRight:50,marginTop:60,borderWidth:2,borderColor:'blue', borderRadius:5,background:'lightgrey'}}
      onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)?
      <div>
        
      <button   style={{fontSize:20,padding:7,paddingLeft:50,paddingRight:50,marginTop:60,marginRight:15,borderWidth:2,borderColor:'blue', borderRadius:5,background:'lightgrey'}}
      onClick={props.reset}>Reset</button> 
      <button style={{fontSize:20,padding:7,paddingLeft:50,paddingRight:50,marginRight:15,borderWidth:2,borderColor:'blue', borderRadius:5,background:'lightgrey'}}
      onClick={props.pause}>Pause</button> 
      </div>: ""
      }

      {(props.status === 2)?
      <div> 
      <button style={{fontSize:20,padding:7,paddingLeft:50,paddingRight:50,marginTop:60,marginRight:15,borderWidth:2,borderColor:'blue', borderRadius:5,background:'lightgrey'}}
      onClick={props.reset}>Reset</button>
       <button style={{fontSize:20,padding:7,paddingLeft:50,paddingRight:50,marginTop:60,borderWidth:2,borderColor:'blue', borderRadius:5,background:'lightgrey'}}
      onClick={props.resume}>Resume</button> 
      </div>: ""
      }
      </div>
      
     
  );
}

export default BtnComponent;

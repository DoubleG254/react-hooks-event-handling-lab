import React,{useState} from "react";

function Keypad (){
    const [password,setPassword]=useState("")
    console.log("Entering password...") 
    return (
        <div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>
      
    )
    ;
}
;

export default Keypad;
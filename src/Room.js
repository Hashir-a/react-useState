import React, {useState}  from 'react';
import './Room.css';

function Room() {
    let [isLit,setLit] = useState(true);
    let [temp ,setTemp] = useState(21);
    
  return (
    <div className= {`room ${isLit?"lit":"dark"}`}>
        <p>This room is {isLit? "Lit":"Dark"}</p>
        <br/>
        <button onClick= {()=> setLit(true)}>Lit</button>
        <button onClick= {()=> setLit(false)}>Dark</button>
        <br/>
        <p>Temperature: {temp}</p>
        <br/>
        <button onClick= {()=>  setTemp(++temp)}>+</button>
        <button onClick= {()=>  setTemp(--temp)}>-</button>
    </div>

  );
}

export default Room;

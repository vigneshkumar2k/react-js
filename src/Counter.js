import React, {useState} from "react";


const Counter = () => {
    const state=0;
    const [count, setCount] = useState(state);
  return (
    <div>
        <p>You Clicked {count} Times</p>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        <button onClick={()=>setCount(state)}>reset</button>
      
    </div>
  )
};

export default Counter

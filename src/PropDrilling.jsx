import { useState } from "react";

export default function PropDrilling(){
    const [count,setCount] = useState(0);

    return <div>
        <count count={count} setCount={setCount}/>
        
    </div>

}
function count({count,setCount}){ //here we neeed to pass setCount down tho count component isn't using it
    //but we are passing setCount as one of the props cause buttons component needs it
    return <div>
        {count}
        <buttons count={count} setCount={setCount}/>
    </div>
    
}

function buttons({count,setCount}){
    return <div>
        <button onClick={()=>{

        }}>
            Increase 
        </button>
        <button onClick={()=>{

        }}>
            Decrese
        </button>
    </div>

}
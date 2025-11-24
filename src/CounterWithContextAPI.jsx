import {  useContext, useState } from "react"
import { CountContext } from "./context";

function CounterApp(){
    const [count,setCount] = useState(0);
    
    //wrap anyone that wants to use the teleported value inside a provider
    return (
    <div>
        {/* wrapping inside the CountContext.Provider */}
        <CountContext.Provider value={count}> 
        <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>
    )
}

function Count({setCount}){
    console.log("count re-rendered"); //yes it does re render as setCount value changes 
    return <div>
        <CountRenderer />
        <Buttons setCount={setCount}/>
    </div>
}
function CountRenderer(){
    const count = useContext(CountContext)
    return <div>
        {count}
    </div>

}

function Buttons({setCount}){
    const count1 = useContext(CountContext)
    return <div>
        <button onClick={()=>{
            setCount(count1+1);
        }}>Increase</button>
        <button onClick={()=>{
            setCount(count1-1);
        }}>Decrease</button>
    </div>

}

export {CounterApp};
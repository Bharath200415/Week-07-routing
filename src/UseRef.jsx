import { useEffect, useRef, useState } from 'react'

function App2() {
  const [incomeTax,setIncomeTax] = useState(2000);
  const divref = useRef();

  useEffect(()=>{
    setTimeout(()=>{
        console.log(divref.current);
      divref.current.innerHTML=10
  },5000);
  },[])

  return (
    <div>
      hi there, your income tax returns are: <div ref={divref}>
        {incomeTax}
      </div>
    </div>
  )
}


export {App2}

//traditional way to do it:

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(()=>{
//     setTimeout(()=>{
//       document.getElementById("IncomeTaxContainer").innerHTML=10
//   },5000);
//   },[])

//   const incomeTax=2000;

//   return (
//     <div>
//       hi there, your income tax returns are: <div id="IncomeTaxContainer">
//         {incomeTax}
//       </div>
 
//     </div>
//   )
// }
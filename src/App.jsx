import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Landing  from './components/Landing'
const DashBoard = lazy(()=>import('./components/DashBoard'))


function App(){
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."} ><DashBoard/></Suspense>} />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
function Appbar(){
  const navigate=useNavigate(); //this is a hook which react router dom provides
  
  return <div>
          <div style={{ backgroundColor:"black"}}>
        
        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        
        <button onClick={()=>{
          navigate("/dashboard")
        }}>DashBoard</button>
      
      </div>
    </div>

}

export default App

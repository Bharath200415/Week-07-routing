import { useNavigate } from "react-router-dom"

export default function DashBoard(){ //default means we can change the way of importing

    return <div style={{marginTop:40}}>
        DashBoard
        <Boldify>   Hi there!</Boldify>
    </div>
}

function Boldify({children}){
    return <b>
        {children}
    </b>

}
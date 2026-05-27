import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Welcome from "./welcome"
import Register from "./register"
import Login from "./login"
import Mainpage from "./mainpage"


function Mainview(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/mainpage" element={<Mainpage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Mainview


import Register from "./register"
import { useNavigate } from "react-router-dom"

function Welcome(){


    let navigate = useNavigate()

    function Gotoregister(){
        navigate("/register")
    }
    function Gotologin(){
        navigate("/login")
    }



    return(
        <>
        <div className="flex justify-end p-5 space-x-10">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl cursor-pointer" onClick={Gotoregister}>Register</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-2xl cursor-pointer" onClick={Gotologin}>Login</button>
        </div>

        <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        </div>

        

        

        </>
        
    )
}

export default Welcome
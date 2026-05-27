
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(){

    let [email , setemail] = useState("")
    let [password , setpassword] = useState("")

    let navigate = useNavigate()

    function Changeemail(e){
        setemail(e.target.value)
    }
    function Changepassword(e){
        setpassword(e.target.value)
    }

    function Gotomainpage(){
        let data = JSON.parse(localStorage.getItem("users")) || []

        let founduser = data.find((user) =>{
            return user.email==email && user.password==password
        })

        if(founduser){
            alert("Login Success..")
            navigate("/mainpage")

            setemail("")
            setpassword("")
        }else{
            alert("Invalid Credentials..")

            setpassword("")
        }

    }

    


    return(
        <div className="flex flex-col mt-10 space-y-5 items-center">
            <h2 className="text-3xl font-bold">Login</h2>

            <input type="email" value={email} placeholder="Email" className="border p-2 rounded-2xl " onChange={Changeemail} />
            <input type="password" value={password} placeholder="Password" className="border p-2 rounded-2xl " onChange={Changepassword} />

            <button className="border border-blue-400 px-5 py-2 rounded-2xl text-blue-600 focus:outline-offset-2 hover:border-transparent hover:bg-blue-600 hover:text-white active:bg-blue-400 cursor-pointer " onClick={Gotomainpage}>Login</button>
        </div>
    )
}
export default Login
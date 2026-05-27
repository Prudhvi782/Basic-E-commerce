
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Register(){

    let navigate = useNavigate()

    let [mobile , setmobile] = useState("")
    let[email , setemail] = useState("")
    let[password , setpassword] = useState("")
    let[confirm , setconfirm] = useState("")

    function Changemobile(e){
        setmobile(e.target.value)
    }
    function Changeemail(e){
        setemail(e.target.value)
    }
    function Changepassword(e){
        setpassword(e.target.value)

    }
    function Changeconfirm(e){
        setconfirm(e.target.value)
    }
    function Handlesubmit(){

        if(!mobile || !email || !password || !confirm){
            alert("All fields are required")
            return 
        }

        if(mobile.length!=10){
            alert("Mobile digits must be 10")
            return
        }

        if(!email.includes("@")){
            alert("Invalid Email")
            return
        }

        if(!(email.includes("gmail") || email.includes("yahoo"))){
            alert("Invalid email... ")
            return
        }
        
        if(!email.endsWith(".com") && (!email.endsWith(".co")) && (!email.endsWith(".in"))){
            alert("Please check the email...")
            return
        }

        if(password.length < 6){
            alert("Password must be atleast 6 characters")
            return
        }

        if(password!==confirm){
            alert("Password doesn't match")
            return
        }


        let user_data = {mobile , email , password , confirm}

        let data = JSON.parse(localStorage.getItem("users")) || []

        let already_exits = data.find((user) =>user.email==email)

        if(already_exits){
            alert("User already exists..")
            return
        }

        data.push(user_data)
        localStorage.setItem("users", JSON.stringify(data))

        alert("Registration Successfull...")
        navigate("/login")
        


        console.log(mobile , email , password , confirm)
    }
    function Gotoback(){
        navigate("/")
    }

    return(
        <>
        <div>
            <button className="text-5xl p-5 flex justify-start cursor-pointer" onClick={Gotoback}>⬅️</button>
        </div>
            <div className="flex h-screen">
                <div className="w-1/2 flex flex-col items-center mt-10 space-y-5">
                    <h2 className="text-3xl font-bold">Register Form</h2>

                

                
                    <input  type="text" value={mobile} placeholder="Mobile" className="border p-2 rounded-t-4xl" onChange={Changemobile}  />
                    <input type="email" required value={email} placeholder="Email" className="border p-2 rounded-b-4xl " onChange={Changeemail} />
        
                    <input type="password" value={password} placeholder="Password" className="border p-2 rounded-b-2xl" onChange={Changepassword} />
                    <input type="password"value={confirm} placeholder="Confirm password" className="border p-2 rounded-t-2xl" onChange={Changeconfirm} />


                    <button className="border border-purple-400 px-5 py-2 text-purple-600 rounded-2xl cursor-pointer focus:outline-offset-2 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-300 " onClick={Handlesubmit}>Register</button>


                </div>

                <div className="w-1/2 h-full">
                    <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?semt=ais_hybrid&w=740&q=80" 
                    alt="Loading..." className="w-full h-full object-cover" />
                </div>
            </div>

        
        </>
    )
}

export default Register
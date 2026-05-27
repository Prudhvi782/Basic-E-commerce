
import { products } from "./products"
import { useNavigate } from "react-router-dom"
import Productcard from "./productcard"
import { useState , useEffect , useRef } from "react"
import "./styles.css"


function Mainpage(){

    let navigate = useNavigate()

    let [search , setsearch] = useState("")
    let [category , setcategory] = useState("ALL")
    let [selectedproduct , setselectedproduct] = useState(null)
    let [index , setindex] = useState(0)
    let [menu , setmenu] = useState(false)

    let audioref = useRef(null)





    function Gotohome(){
        navigate("/")
    }

    function Changesearch(e){
        setsearch(e.target.value)

    }
    function Showall(){
        setcategory("ALL")
        
    }
    function Showmobile(){
        setcategory("Mobile")
    }
    function Showlaptop(){
        setcategory("Laptop")
    }
    function Showspeaker(){
        setcategory("Speaker")
    }
    function Clickingmenu(){
        setmenu(!menu)
    }
    function Displaycard(product){
        if(audioref.current)
        {
            audioref.current.pause()
            audioref.current.currentTime = 0
        }
        audioref.current = new Audio(product.audio)
        audioref.current.play()
        setselectedproduct(product)
        setindex(0)
    }

    function Closeoption(){
        if(audioref.current)
        {
            audioref.current.pause()
            audioref.current.currentTime = 0
        }
        setselectedproduct(null)
        setindex(0)
    }

    let filtered = products.filter((product) =>{
        let matchcate = category=="ALL" || product.category==category
        let matchsearch =  product.category.toLowerCase().includes(search.toLowerCase()) ||
                product.name.toLowerCase().includes(search.toLowerCase()) 
        return matchcate && matchsearch
    })

    useEffect(()=>{
        if(!selectedproduct)
        {
             return
        }
            let interval = setInterval(() => {
                setindex((val) =>(val+1)%selectedproduct.imgPath.length)
            }, 2000);
            return () => clearInterval(interval)
        
         },[selectedproduct?.imgPath?.length])
           
            

    let popup = null

    if(selectedproduct!=null)
    {
        popup = (
            <div className="fixed inset-0 bg-black/30  backdrop-blur-sm flex items-center justify-center  transition-all duration-300" onClick={Closeoption}>
                <div className="bg-white w-3/4 p-6 rounded-xl flex gap-6 relative transform transition-all duration-300 hover:scale-105">
                    <button className="absolute top-2 right-2 text-red-500 text-xl cursor-pointer" onClick={Closeoption}>❌</button>
                    

                    <div className="w-1/2 flex items-center justify-center">
                        <img className="w-full h-80 object-contain" src={selectedproduct.imgPath[index]} alt="" />
                    </div>

                    <div className="w-1/2">
                        <h2 className="text-2xl font-bold">{selectedproduct.name}</h2>
                        <p className="mt-2">{selectedproduct.price}</p>
                        <p className="mt-2">{selectedproduct.category}</p>

                        <p className="mt-4 text-gray-400">This is a premium product</p>
                    </div>


                </div>
            </div>
        )
    }


    return(
        <div className="delay w-full overflow-x-hidden">
            
                <div className="flex justify-between items-center flex-wrap px-4 py-3 bg-gray-400 w-full ">
                    <div className="flex flex-wrap items-center gap-4">
                        <img src="https://i.pinimg.com/736x/87/ae/de/87aede37adb028f8284e3d5f6f01faa9.jpg" alt="logo" className="w-30 h-20 rounded-full" />


                        <h2 className="text-2xl font-extrabold text-purple-700 ">TRENDY</h2>
                        <input placeholder="Search Products...." value={search} className="border-2 border-gray-300 focus:border-violet-500 transition-all duration-300 focus:scale-105 focus:ring-violet-300 focus:outline-none p-2 rounded w-40 md:60 lg:w-80 xl:w-96" onChange={Changesearch}  />
                

                    </div>


                <div className="flex items-center gap-3">

                    <button className="text-2xl lg:hidden" onClick={Clickingmenu}>&#9776;</button>
                    <div className={`${menu ? "flex" : "hidden"} flex-col lg:flex lg:flex-row gap-3 md:gap-5 absolute md:static top-16 right-0 w-full md:w-auto bg-gray-400 md:bg-transparent p-4 md:p-0`}>
                    
                    <button className={`px-3 py-2 border border-blue-500 rounded   active:bg-blue-300 cursor-pointer ${category=="ALL"?"bg-blue-500 text-white":""}`} onClick={Showall}>ALL</button>
                    <button className= {`px-3 py-2 border border-blue-500 rounded  cursor-pointer ${category=="Mobile" ? "bg-blue-500 text-white":""}`} onClick={Showmobile}>Mobiles</button>
                    <button className= {`px-3 py-2 border border-blue-500 rounded  cursor-pointer ${category=="Laptop"? "bg-blue-500 text-white" :""}`} onClick={Showlaptop}>Laptops</button> 
                    <button className= {`px-3 py-2 border border-blue-500 rounded  cursor-pointer ${category=="Speaker"? "bg-blue-500 text-white":""}`} onClick={Showspeaker}>Speakers</button>


                    <button className="bg-violet-500 active:bg-violet-200 px-3 py-2 rounded-2xl text-white cursor-pointer " onClick={Gotohome}>Logout</button>
                </div>
                </div>

                

                
               
            </div>

            <div className=" md:grid-cols-3  lg:grid-cols-4 sm:grid-cols-2 grid grid-cols-1 gap-6 px-4 py-6">
                {filtered.map((product) => (
                <Productcard key={product.id} product={product} handleparent={Displaycard} />
            ))}
            </div>
             {popup}

             <div className="bg-gray-700 text-white mt-10 p-10 ">
                <div className="grid grid-cols-3 gap-8">
                    <h2 className="text-xl font-bold mb-3">TRENDY</h2>
                    <p className="text-gray-300">Best online store for Mobiles,Laptops,Speakers.</p>
                </div>
                <div>
                    <ul className="text-gray-300 space-y-1">
                        <li><u>Instagram</u></li>
                        <li><u>Facebook</u></li>
                        <li><u>Linkedin</u></li>
                        <li><u>Youtube</u></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Contact:</h3>
                    <p className="text-gray-300">Email: cheppanubrother@gmail.com</p >
                    <p className="text-gray-300">Phone:+91 1234567(cheppanu)</p>
                </div>
             </div>

             <div className="text-center text-gray-500 mb-4 border-t p-4">
                &copy; 2026 TRENDY. All rights reserved.
             </div>

            
        </div>

        
    )
}
export default Mainpage
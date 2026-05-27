
import { useState , useEffect } from "react"

function Productcard({product , handleparent}){

    let [index , setindex] = useState(0)

    

    function Handlecheck(){
        handleparent(product)
    }

    return(

        <div className="  border  p-4 md:px-6  rounded-2xl flex flex-col items-center gap-2 hover:shadow-xl hover: shadow-violet-400  transition hover:scale-105  cursor-pointer"onClick={Handlecheck}>
                  <h2 className="text-xl font-bold">{product.name}</h2>

                  <img src={product.imgPath[index]} className="w-full h-40 object-contain "/>
                  <p>&#8377;{product.price}</p>
                  <p>{product.category}</p>


            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full " >More Info</button>
        </div>
    )
}

export default Productcard
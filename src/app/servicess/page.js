'use client'
import { useRouter } from "next/navigation"


const Service = ()=>{
    const router=useRouter();
    return(
        <div>
            <center>
                <h1 className="text-3xl mt-44">Services</h1>
                <br/>
                <button className="border p-2" onClick={()=>router.push("/")}>
                    Home Page
                </button>
            </center> 
        </div>
    )
}

export default Service;
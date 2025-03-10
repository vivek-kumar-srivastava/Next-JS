'use client'
import Link from "next/link";
import Header from "../header/page";

const Login = ()=>{
    return(
    <> 
        <Header/>
        <div className="absolute">
        <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="bg"
        />
        </div>
        <div>
            <center>
            <br/>
            <Link className="underline" href="/">Home</Link>
            </center>
          
         
                <form className="absolute items-start bg-black w-3/12 opacity-80 p-12 my-20 mx-auto right-0 left-0 rounded-lg ">
                <h1 className="text-2xl font-bold ">Sign-In</h1>
                <br/> <br/>
                <input className="rounded-md p-3 my-6 w-full" type="text" placeholder="Userame" />
                <input className="rounded-md p-3 my-6 w-full" type="password" placeholder="Password" />
                <button className="w-full my-6 p-2 rounded-md bg-cyan-800">Sign-In</button>
                
                </form>
                </div>
            
        </>
    )
}
export default Login;
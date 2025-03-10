'use client'
import { useState } from "react";
import Header from "./header/page";

export default function Home() {
 const[name,setName]=useState(true)
  const toggleText = ()=>{
    setName(!name);
  }
  const Footer=()=>{
    return(
      <h1>Internal Component</h1>
    )
  }
  
  return (
    <div className="p-5 p-18 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <div className="justify-items-center mt-16">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl">Home Page</h1>
       
        <h1>Welcome to Proto-1, by {name?"Vivek":"V"}</h1>
        <button className="border p-2" onClick={()=>{toggleText()}}>click Me</button>
        <Footer/>
        {Footer()}
      </main>
      </div>
    </div>
  );
}


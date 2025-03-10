'use client'
import { use } from 'react';
export default function Student({params}){
    const usingParam = use(params);
    console.log(params);
    return(
        
        <center>
 <div>
            <h1 className="text-3xl mt-20 mb-4">Student detail</h1>
            <p>Name: {usingParam.student} </p>
        </div>
        </center>
       
    )
} 
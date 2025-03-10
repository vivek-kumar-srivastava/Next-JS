import Link from "next/link";

const FounderInfo = ()=>{
    return(
        
        <div>
            <center>
                <p className="text-3xl mt-32">Founder Page</p>
                <Link className="underline" href="/">Home Page</Link>
            </center>
        </div>
    )
}
//nested routing is done here using file based routing and Link tag.
export default FounderInfo;
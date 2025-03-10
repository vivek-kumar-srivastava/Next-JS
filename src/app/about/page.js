import Link from "next/link";

export default function About(){
    return(
        <div>
            <center>
                <h1 className="text-3xl mt-48">About Page</h1>
                <br></br>
                <Link className="underline" href="/">Home Page</Link>
                <br/>
                <Link className="underline" href="/about/aboutFounder">Founder</Link>
            </center>
        </div>
    )
}


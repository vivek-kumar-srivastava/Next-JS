import Link from "next/link";

export default function Header(){
    return(
      <div className=" opacity-100 flex space-x-3 mr-4 ml-3  bg-transparent">
   <img className="m-2 " src="https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspline_logo.647803e0.png&w=128&q=75" alt="logo" width="50" height="50"/>
   <h1 className="text-3xl mt-5">Cosmo</h1>
   <div className="flex-grow "></div>
   <div className="mt-7 space-x-5 underline ml-6">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/about">About</Link>
          <Link href="/servicess">Services</Link>
          <Link href="/studentList">Team</Link>
          <Link href="/productlist">Product Data</Link>
          </div>
      </div>
    )
  }
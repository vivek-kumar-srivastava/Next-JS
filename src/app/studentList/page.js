import Link from "next/link";

export default function StudentList({student}){
    return(
        <center>
 <div>
            <h1 className="text-3xl mt-20 mb-4">Student List</h1>
            <ul className="">
                <li><Link href="/studentList/Sarah">Sarah</Link></li>
                <li><Link href="/studentList/Yuvika">Yuvika</Link></li>
                <li><Link href="/studentList/Vivek">Vivek</Link></li>
                <li><Link href="/studentList/Vicky">Vicky</Link></li>
                <li><Link href="/studentList/Varun">Varun</Link></li>
            </ul>
        </div>
        </center>
       
    )
}
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <>
        {/* Default Header */}
        <div className={`hidden sm:flex flex-row gap-16 shadow-lg py-2 justify-center w-full sm:w-auto ml-2`}>
                <Link href={"/"} className="no-underline text-black">Home</Link>
                <Link href="/About" className="no-underline text-black">About Us</Link>
                <Link href="/Contact" className="no-underline text-black">Contact Us</Link>
                <Link href="https://www.facebook.com/kannadasanchaya">
                    <Image src="/facebook.png" alt="facebook" width={35} height={30} />
                </Link>
                <Link href="https://twitter.com/kannadasanchaya">
                    <Image src="/twitter.webp" alt="twitter" width={45} height={40} />
                </Link>
            </div>
            <div className='flex justify-end mr-5'>
            {/* Mobile Menu */}
            <button onClick={() => setShowMenu(!showMenu)} className="block sm:hidden focus:outline-none">
                <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showMenu ?
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> :
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    }
                </svg>
            </button>
            </div>
            
            {/* Mobile Menu Links */}
            <nav className={showMenu ? "flex flex-col gap-3 shadow-lg py-2 justify-center items-center w-full sm:hidden" : "hidden"}>
         
                <Link href="/" className="no-underline text-black">Home</Link>
                <Link href="/About" className="no-underline text-black">About Us</Link>
                <Link href="/Contact" className="no-underline text-black">Contact Us</Link>
                <Link href="https://www.facebook.com/kannadasanchaya">
                    <Image src="/facebook.png" alt="facebook" width={35} height={30} />
                </Link>
                <Link href="https://twitter.com/kannadasanchaya">
                    <Image src="/twitter.webp" alt="twitter" width={45} height={40} />
                </Link>
                
            </nav>
           
       
        </>
    )
}


"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
    return(
        <>
        
             <div className='flex flex-row justify-center gap-16  shadow-lg py-2 '>
             
                <Link  className="no-underline text-black" href={"/Home"}>Home</Link>
                <Link className="no-underline text-black" href="/About">About Us</Link>
                <Link className="no-underline text-black" href="/">Search</Link>
                <Link className="no-underline text-black" href="/Contact">Contact Us</Link>
               
           
                <Link href="https://www.facebook.com/kannadasanchaya">
                    <Image
                    src="/fb.png"
                    alt="facebook"
                    width={35}
                    height={25}
                    />
                </Link>
                <Link href="https://twitter.com/kannadasanchaya">
                    <Image
                    src="/twitter.webp"
                    alt="twitter"
                    width={45}
                    height={40}
                    />
                </Link>
            </div>
        </>
    )
}

const CustomLink = ({ href, children }) => (
    <div className="text-black  sm:text-l md:text-l  l:text-l ">
            <Link href={href}>
        
            {children}
        
    </Link>
    </div>
    
);
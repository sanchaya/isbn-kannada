"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
    return(
        <>
             <div className='flex flex-row justify-center gap-16  shadow-lg py-2'>
                
                <CustomLink href="/Home">Home</CustomLink>
                <CustomLink href="/About">About Us</CustomLink>
                <CustomLink href="/">Search</CustomLink>
                <CustomLink href="/Contact">Contact Us</CustomLink>
                <Link href="https://www.facebook.com/kannadasanchaya">
                    <Image
                    src="/fb.png"
                    alt="facebook"
                    width={30}
                    height={20}
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
    <Link href={href}>
        <h6 className="text-black  sm:text-l md:text-l  l:text-l ">
            {children}
        </h6>
    </Link>
);
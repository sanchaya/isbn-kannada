
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import Image from 'next/image';
import Link from 'next/link';
import initTranslations from '../i18n';
import TranslationsProvider from './TranslationProvider';
import { useTranslation } from 'react-i18next';
const i18nNamespaces = ['default'];

export default  function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const { t, resources } = useTranslation();

    return(
        <>
    
        
        <div className={`hidden sm:flex flex-row  shadow-lg py-2 justify-center w-full sm:w-auto ml-2`}>
                <div className="flex items-center mx-auto gap-4">
                <Image src="/sanchaya.jpg" alt="sanchaya" width={85} height={40}/>
                <Link href={"/"} className="no-underline text-black">{t('header.home')}</Link>
                <Link href="/About" className="no-underline text-black">{t('header.about')}</Link>
                <Link href="/Contact" className="no-underline text-black">{t('header.contact')}</Link>
                </div>
                <div className='flex items-center mr-auto gap-4'>
                <Link href="https://www.facebook.com/kannadasanchaya">
                    <Image  src="/facebook.png" alt="facebook" width={35} height={30} />
                </Link>
                <Link href="https://twitter.com/kannadasanchaya">
                    <Image src="/twitter.webp" alt="twitter" width={45} height={40} />
                </Link>
                </div>
                
            </div>

           
            <div className='flex justify-end items-center mr-5'>
            {/* Mobile Menu */}
            <Image className="block lg:hidden mr-auto ml-5 mt-1" src="/sanchaya.jpg" alt="sanchaya" width={85} height={40}/>
            <button onClick={() => setShowMenu(!showMenu)} className="block sm:hidden focus:outline-none">
           
                <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showMenu ?
                  
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      
                         :
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    }
                </svg>
            </button>
           
            </div>
        
            
            {/* Mobile Menu Links */}
            
            <nav className={showMenu ? "flex flex-col gap-3 shadow-lg py-2 justify-center items-center w-full sm:hidden" : "hidden"}>
                
                <Link href="/" className="no-underline text-black">{t('header.home')}</Link>
                <Link href="/About" className="no-underline text-black">{t('header.about')}</Link>
                <Link href="/Contact" className="no-underline text-black">{t('header.contact')}</Link>
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


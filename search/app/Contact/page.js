"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import RazorPay from '../components/razorpay';
import Header from '../components/header';
export default function Contact() {
    
    return(
        <>
        <div className='mb-20 '>
            <Header/>
      
        
        </div>
        <div className='flex justify-center items-center gap-4 mt-20'>
    
            <h4>
                Contact Us
            </h4>
            <h6>
            info@sanchaya.org <br/> reachus@sanchaya.org

            </h6>
        </div>
        </>
    )
}
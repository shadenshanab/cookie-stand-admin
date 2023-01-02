import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
     return (
          <header>
               <nav className='flex flex-wrap items-center px-3 bg-[#5A2C22] py-2'>
                    <Link className='inline-flex items-center px-2 mr-5' href='/'>
                         <span className='text-xl font-bold tracking-wide text-[#FADE9C] uppercase'> Cookies Shop </span>
                         </Link>
                         <section>
                              <section>
                                   <Link className='items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]' href='/'>Home</Link>
                                   <Link className='items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]' href='/services'>Services</Link>
                                   <Link className='items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]' href='/about'>About Us</Link>
                              </section>
                         </section>
               </nav>
          </header>
     )
}
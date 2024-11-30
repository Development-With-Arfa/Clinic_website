import React from 'react';
import Link from 'next/link';
import { FaRegHospital } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Nav = () => {
  return (
    <nav className="bg-white h-16 flex items-center px-2 md:pl-8 w-100% justify-between md:pr-0">
            <div className='flex'>
              <FaRegHospital className="h-12 w-12 text-[#0463FA]"/>
              <h1 className="text-4xl font-bold text-[#0463FA] self-center px-3">Klinik</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                <ul className="flex gap-5 text-lg px-5">
                  <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/" target="_main">Home</Link></li>
                  <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/About" target='_main'>About</Link></li>
                  <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Service" target='_main'>Service</Link></li>
                  <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Features" target='_main'>Features</Link></li>
                  <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Appointment" target='_main'>Appointment</Link></li>
                  <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Testimonials" target='_main'>Testimonials</Link></li>
                </ul>
                  <button className="flex items-center justify-center gap-3 h-16 w-48 bg-[#0463FA] text-white font-medium">
                    Appointment
                      <FaArrowRight className="font-bold"/>
                  </button>
              </div>
            </div>

            <div className='md:hidden'>
              <Sheet>
                <SheetTrigger><RxHamburgerMenu className='h-10 w-7 text-gray-500'/></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                    <ul className="flex flex-col gap-5 text-lg px-5">
                      <li className='hover:text-[#0463FA] cursor-pointer'><Link href="./" target="_main">Home</Link></li>
                      <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/About" target="_main">About</Link></li>
                      <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Service" target="_main">Service</Link></li>
                      <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Features" target="_main">Features</Link></li>
                      <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Appointment" target="_main">Appointment</Link></li>
                      <li className='hover:text-[#0463FA] cursor-pointer'><Link href="/Testimonials" target="_main">Testimonials</Link></li>
                    </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
    </nav>
  )
}

export default Nav;
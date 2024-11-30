import React from 'react';
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti"
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
        <footer className="h-auto w-auto bg-blue-950 text-white py-20 px-10 flex flex-col lg:flex-row gap-6 lg:gap-10 lg:justify-center flex-wrap">
            <div className='h-auto lg:w-1/5'>
                <h3 className="font-bold text-lg py-5">Address</h3>
                <div className='flex gap-3 py-1'>
                    <FaMapMarkerAlt/>
                    <p>123 Street, New York, USA</p>
                </div>
                <div className='flex gap-3 py-1'>    
                    <FaPhoneAlt/>
                    <p>+012 345 67890</p>
                </div>
                <div className='flex gap-3 py-1'>
                    <MdEmail/>
                    <p>info@example.com</p>
                </div>
                <div className='flex py-2'>
                    <div className='h-8 w-8 bg-blue-950 border border-white rounded-full mr-2 flex items-center justify-center hover:bg-white cursor-pointer'><FaTwitter className="text-white h-4 w-4 hover:text-[#0463FA]"/></div>
                    <div className='h-8 w-8 bg-blue-950 border border-white rounded-full mr-2 flex items-center justify-center hover:bg-white cursor-pointer'><TiSocialLinkedin className="text-white hover:text-[#0463FA] h-7 w-7"/></div>
                    <div className='h-8 w-8 bg-blue-950 border border-white rounded-full mr-2 flex items-center justify-center hover:bg-white cursor-pointer'><FaFacebookF className="text-white hover:text-[#0463FA] h-5 w-5"/></div>
                    <div className='h-8 w-8 bg-blue-950 border border-white rounded-full mr-2 flex items-center justify-center hover:bg-white cursor-pointer'><FaYoutube className="text-white hover:text-[#0463FA] h-5 w-5"/></div>
                </div>
            </div>
            
            <div className="flex flex-col gap-2 lg:w-1/5 h-auto">
                <h3 className="font-bold text-lg py-5">Services</h3>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Cardiology</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>    
                    <IoIosArrowForward/>
                    <p className="text-sm">Pulmonary</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Neurology</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Orthopedics</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Laboratory</p>
                </div>  
            </div>

            <div className="lg:w-1/5 h-auto flex flex-col gap-2">
                <h3 className="font-bold text-lg py-5">Quick Links</h3>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">About Us</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>    
                    <IoIosArrowForward/>
                    <p className="text-sm">Contact Us</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Our Services</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Terms & Conditions</p>
                </div>
                <div className='flex gap-3 py-1 cursor-pointer transition-all duration-500 delay-100 hover:tracking-widest hover:text-[#0463FA]'>
                    <IoIosArrowForward/>
                    <p className="text-sm">Support</p>
                </div>  
            </div>

            <div className="flex flex-col gap-2 lg:w-1/5 h-auto">
                <h3 className="font-bold text-lg py-5">Newsletter</h3>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className='relative'>
                    <input type="email" placeholder='Your email' className="h-16 w-auto my-3 rounded-lg px-5"/>
                    <button className="h-12 w-24 -mx-2 bg-[#0463FA] rounded-lg absolute right-3 left-40 top-5 transition-all duration-500 hover:bg-[#264e8a]">Sign Up</button>
                </div>
            </div>
    </footer>
  )
}

export default Footer;
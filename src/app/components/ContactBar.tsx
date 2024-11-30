import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti"
import { FaInstagram } from "react-icons/fa";

const ContactBar = () => {
  return (
  <div className='hidden lg:block'>
    <section className='bg-[#EFF5FF] h-14 py-4 px-10 flex justify-between'>
      <div className="flex">
        <div className="flex">
          <FaMapMarkerAlt className="text-[#0463FA] h-5 mx-3 text-xs"/>
          <p className="text-slate-400 text-sm">123 Street, New York, USA</p>
        </div>

        <div className="flex ml-5">
          <FaRegClock className="text-[#0463FA] h-5 mx-3"/>
          <p className="text-slate-400 text-sm">Mon - Fri : 09.00 AM - 09.00 PM</p>
        </div>
      </div>

      <div className='flex'>
        <div className='flex mt-1'>
          <FaPhoneAlt className="text-[#0463FA] h-5 mx-3"/>
          <p className="text-slate-400 text-sm mr-4">+012 345 6789</p>
        </div>
        <div className="flex mb-4">
          <div className='h-7 w-7 bg-[#0463FA] rounded-full mr-2 '><FaFacebook className="text-white h-7 w-7"/></div>
          <div className='h-8 w-8 bg-white rounded-full mr-2 flex items-center justify-center'><FaTwitter className="text-[#0463FA] h-5 w-5"/></div>
          <div className='h-8 w-8 bg-white rounded-full mr-2 flex items-center justify-center'><TiSocialLinkedin className="text-[#0463FA] h-7 w-7"/></div>
          <div className='h-8 w-8 bg-white rounded-full mr-2 flex items-center justify-center'><FaInstagram className="text-[#0463FA] h-5 w-5"/></div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ContactBar;
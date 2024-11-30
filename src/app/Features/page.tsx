import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import Image from 'next/image';
import { FaCheck } from "react-icons/fa";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa";

const Features = () => {
  return (
    <section className="h-auto w-auto flex flex-col lg:flex-row">
        <div className="h-auto lg:w-1/2 bg-[#0463FA] pl-14 py-20 text-white">
            <h3 className='h-8 w-28 text-center text-white border border-white rounded-full py-1'>Features</h3>
            <h2 className="text-2xl font-bold py-5 lg:text-4xl ">Why Choose Us</h2>
            <p className="w-4/5 text-wrap">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
        
           <div className="py-14 flex flex-wrap">
            
            <div className="w-1/2 flex gap-5 py-5">
                <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                    <FaUserDoctor className="text-[#0463FA] h-5 w-5"/>
                </div>
                <div>
                    <p className="text-sm md:text-medium">Experience</p>
                    <h3 className="text-lg font-semibold md:text-xl">Doctors</h3>
                </div>
            </div>

            <div className="w-1/2 flex gap-5 py-5">
                <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                    <FaCheck className="text-[#0463FA] h-5 w-5"/>
                </div>
                <div>
                    <p className="text-sm md:text-medium">Quality</p>
                    <h3 className="text-lg font-semibold md:text-xl">Services</h3>
                </div>
            </div>

            <div className="w-1/2 flex gap-5 py-5">
                <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                    <BiSolidMessageRoundedAdd className="text-[#0463FA] h-5 w-5"/>
                </div>
                <div>
                    <p className="text-sm md:text-medium">Positive</p>
                    <h3 className="text-lg font-semibold md:text-xl">Consultation</h3>
                </div>
            </div>

            <div className="w-1/2 flex gap-5 py-5">
                <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                    <FaHeadphones className="text-[#0463FA] h-5 w-5"/>
                </div>
                <div>
                    <p className="text-sm md:text-medium">24 Hours</p>
                    <h3 className="text-lg font-semibold md:text-xl">Support</h3>
                </div>
            </div>
        </div>
        </div>

        <div>
            <Image
                src="/img/feature.jpg"
                alt="img"
                height={400}
                width={400}
                className='w-full h-auto'
            />
        </div>
    </section>
  )
}

export default Features
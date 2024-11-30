import React from 'react'
import { BsHeartPulseFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi"
import { FaXRay } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { LuTestTubes } from "react-icons/lu";

export default function Service() {
  return (
    <section className='h-auto w-full'>
        <div className="py-5">
        <h3 className='h-8 w-28 mx-auto text-center text-[#8E8D92] border border-[#C7DCFB] rounded-full py-1'>Services</h3>
        <h2 className="text-4xl font-bold text-[#1B2C51] text-center mt-5">Health Care Solutions</h2>
        </div>
        <div className='h-auto w-4/5 py-6 mx-auto gap-3 flex flex-wrap justify-evenly'>
            
            <div className="h-auto w-80 bg-[#e0edff] my-5 px-10 py-12 rounded-lg transition  duration-700 delay-100 cursor-pointer hover:scale-105 hover:shadow-xl">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <BsHeartPulseFill className="h-6 w-6 text-[#0463FA]"/>
                </div>
                <h2 className="text-[#1B2C51] text-2xl font-bold my-5">Cardiology</h2>
                <p className="text-[#8E8D92] my-5">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
                <div className="h-14 w-14 rounded-full bg-white flex items-center px-3 cursor-pointer group hover:w-64">
                  <FiPlusCircle className="h-7 w-7 text-[#0463FA]"/>
                  <p className="px-5 hidden group-hover:block">Read More</p>
                </div>
            </div>

            <div className="h-auto w-80 bg-[#e0edff] my-5 px-10 py-12 rounded-lg transition  duration-700 delay-100 cursor-pointer hover:scale-105 hover:shadow-xl">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <FaXRay className="h-7 w-7 text-[#0463FA]"/>
                </div>
                <h2 className="text-[#1B2C51] text-2xl font-bold my-5">Pulmonary</h2>
                <p className="text-[#8E8D92] my-5">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
                <div className="h-14 w-14 rounded-full bg-white flex items-center px-3 cursor-pointer group hover:w-64">
                  <FiPlusCircle className="h-7 w-7 text-[#0463FA]"/>
                  <p className="px-5 hidden group-hover:block">Read More</p>
                </div>
            </div>

            <div className="h-auto w-80 bg-[#e0edff] my-5 px-10 py-12 rounded-lg transition  duration-700 delay-100 cursor-pointer hover:scale-105 hover:shadow-xl">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <FaBrain className="h-6 w-6 text-[#0463FA]"/>
                </div>
                <h2 className="text-[#1B2C51] text-2xl font-bold my-5">Neurology</h2>
                <p className="text-[#8E8D92] my-5">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
                <div className="h-14 w-14 rounded-full bg-white flex items-center px-3 cursor-pointer group hover:w-64">
                  <FiPlusCircle className="h-7 w-7 text-[#0463FA]"/>
                  <p className="px-5 hidden group-hover:block">Read More</p>
                </div>
            </div>

            <div className="h-auto w-80 bg-[#e0edff] my-5 px-10 py-12 rounded-lg transition  duration-700 delay-100 cursor-pointer hover:scale-105 hover:shadow-xl">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <FaWheelchair className="h-6 w-6 text-[#0463FA]"/>
                </div>
                <h2 className="text-[#1B2C51] text-2xl font-bold my-5">Orthopedics</h2>
                <p className="text-[#8E8D92] my-5">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
                <div className="h-14 w-14 rounded-full bg-white flex items-center px-3 cursor-pointer group hover:w-64">
                  <FiPlusCircle className="h-7 w-7 text-[#0463FA]"/>
                  <p className="px-5 hidden group-hover:block">Read More</p>
                </div>
            </div>

            <div className="h-auto w-80 bg-[#e0edff] my-5 px-10 py-12 rounded-lg transition  duration-700 delay-100 cursor-pointer hover:scale-105 hover:shadow-xl">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <FaTooth className="h-6 w-6 text-[#0463FA]"/>
                </div>
                <h2 className="text-[#1B2C51] text-2xl font-bold my-5">Dental Surgery</h2>
                <p className="text-[#8E8D92] my-5">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
                <div className="h-14 w-14 rounded-full bg-white flex items-center px-3 cursor-pointer group hover:w-64">
                  <FiPlusCircle className="h-7 w-7 text-[#0463FA]"/>
                  <p className="px-5 hidden group-hover:block">Read More</p>
                </div>
            </div>

            
            <div className="h-auto w-80 bg-[#e0edff] my-5 px-10 py-12 rounded-lg transition  duration-700 delay-100 cursor-pointer hover:scale-105 hover:shadow-xl">
                <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  <LuTestTubes className="h-6 w-6 text-[#0463FA]"/>
                </div>
                <h2 className="text-[#1B2C51] text-2xl font-bold my-5">Laboratory</h2>
                <p className="text-[#8E8D92] my-5">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
                <div className="h-14 w-14 rounded-full bg-white flex items-center px-3 cursor-pointer group hover:w-64">
                  <FiPlusCircle className="h-7 w-7 text-[#0463FA]"/>
                  <p className="px-5 hidden group-hover:block">Read More</p>
                </div>
            </div>
        </div>
    </section>
  )
}

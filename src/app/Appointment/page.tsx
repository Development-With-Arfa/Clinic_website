import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";


const Appointment = () => {
  return (
    <section className="h-auto w-full my-5 flex flex-col lg:flex-row">
        <div className="h-auto w-full lg:w-1/2 py-12 pl-14">
            <h3 className='h-8 w-32 text-center text-[#8E8D92] border border-[#C7DCFB] rounded-full py-1 px-2'>Appointment</h3>
            <h2 className="text-2xl lg:text-4xl font-bold w-4/5 flex flex-wrap py-5">Make An Appointment To Visit Our Doctor</h2>
            <p className='text-[#8E8D92]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            
            <div className="h-auto w-4/5 bg-[#e0edff] flex gap-5 py-10 px-7 rounded-md my-8 mx-4">
                <div className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                    <FaPhoneAlt className="h-5 w-5 text-[#0463FA]"/>
                </div>
                <div>
                    <p className="text-[#8E8D92] text-md">Call Us Now</p>
                    <h3 className="font-bold lg:text-xl py-1">+012 345 6789</h3>
                </div>
            </div>
            
            <div className="h-auto w-4/5 bg-[#e0edff] flex gap-5 py-10 px-7 rounded-md my-8 mx-4">
                <div className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                    <HiMailOpen className="h-7 w-7 text-[#0463FA]"/>
                </div>
                <div>
                    <p className="text-[#8E8D92] text-md">Mail Us Now</p>
                    <h3 className="font-bold lg:text-xl py-1">info@example.com</h3>
                </div>
            </div>
        </div>

        <div className="h-auto w-full lg:w-1/2 lg:mt-16">
        <div className='h-auto w-auto bg-[#e0edff] py-10 px-5 rounded-lg'>
            <div className="flex flex-col lg:flex-row gap-7 items-center justify-center rounded-lg">
                <div className=" flex flex-col flex-wrap gap-10">
                    <input type="text" placeholder="Your Name" className="h-14 w-56 bg-white text-[#8E8D92] rounded-lg px-3 outline-none focus:border-[4px] focus:border-[#cce1ff]" />
                    <input type="text" placeholder="Your Mobile" className="h-14 w-56 bg-white text-[#8E8D92] rounded-lg px-3 outline-none focus:border-[4px] focus:border-[#cce1ff]" />
                    <div >
                    <input type="date" placeholder="Choose Date" className="h-14 w-56 bg-white text-[#8E8D92] rounded-lg px-3 outline-none focus:border-[4px] focus:border-[#cce1ff]" />
                    </div>
                </div>

                <div className="flex flex-col flex-wrap gap-10">
                    <input type="email" placeholder="Your Email" className="h-14 w-56 bg-white text-[#8E8D92] rounded-lg px-3 outline-none focus:border-[4px] focus:border-[#cce1ff]" />
                    <select name="Choose Doctor" className="h-14 w-56 bg-white text-[#8E8D92] rounded-lg px-3 outline-none focus:border-[4px] focus:border-[#cce1ff]">
                        <option value="Choose Doctor">Choose Doctor</option>
                        <option value="Doctor 1">Doctor 1</option>
                        <option value="Doctor 2">Doctor 2</option>
                        <option value="Doctor 3">Doctor 3</option>
                    </select>
                    <input type="time" name='Choose Time' placeholder="Choose Time" className="h-14 w-56 bg-white text-[#8E8D92] rounded-lg px-3 outline-none focus:border-[4px] focus:border-[#cce1ff]" />
                </div>
            </div>

                <div className="my-8 flex justify-center w-auto">
                    <textarea name="Problem" placeholder="Describe Your Problem" className="h-32 w-4/5 py-3 bg-white text-[#8E8D92] rounded-lg px-3  outline-none focus:border-[4px] focus:border-[#cce1ff]"></textarea>
                </div>
                <div className="my-8 flex justify-center w-auto">
                <button className="h-14 w-4/5 bg-[#0463FA] rounded-lg text-white font-medium">Book Appointment</button>
                </div>
        </div>
            
        </div>
    </section>
  )
}

export default Appointment;
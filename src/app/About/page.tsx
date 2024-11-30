import React from 'react';
import Image from 'next/image';
import { FaRegCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="h-auto md:h-auto w-full flex flex-col lg:flex-row pt-24 mb-24">
      <div className='lg:w-1/2 md:mx-7 mx-auto'>
        <Image
          src="/img/about-1.jpg"
          alt="about-img"
          height={400}
          width={400}
          className="h-72 w-80 md:h-96 md:w-96 rounded-lg my-5 ml-20 md:ml-44"
        />
        <Image
          src="/img/about-2.jpg"
          alt="about-img"
          height={250}
          width={250}
          className='md:h-72 md:w-72 relative bottom-24 md:mx-10 border-[15px] border-white rounded-lg'
        />
      </div>

      <div className='lg:w-1/2 lg:ml-0 ml-9 py-5'>
          <div className="w-5/6 flex flex-col flex-wrap">
            <h3 className='h-8 w-28 text-center text-[#8E8D92] border border-[#C7DCFB] rounded-full py-1'>About Us</h3>
            <h2 className="text-4xl font-bold text-[#1B2C51] pt-4 pb-2">Why You Should Trust Us?</h2>
            <h2 className="text-3xl font-bold text-[#1B2C51]">Get Know About Us!</h2>
            <p className="text-[#8E8D92] mt-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            <br></br>
            <br></br>
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diamrebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sitsanctus dolor eos.</p>
            <div className="flex gap-5 mt-8">
              <FaRegCheckCircle className="h-5 w-5 text-[#0463FA] font-bold"/>
              <p className="text-[#8E8D92]">Quality health care</p>
            </div>
            <div className="flex gap-5 mt-5">
              <FaRegCheckCircle className="h-5 w-5 text-[#0463FA]"/>
              <p className="text-[#8E8D92]">Only Qualified Doctors</p>
            </div>
            <div className="flex gap-5 mt-5">
              <FaRegCheckCircle className="h-5 w-5 text-[#0463FA]"/>
              <p className="text-[#8E8D92]">Medical Research Professionals</p>
            </div>
            <button className="h-14 w-48 mt-10 rounded-full text-white font-medium bg-[#0463FA]">Read More</button>

          </div>
      </div>
    </section>
  )
}

export default AboutUs;
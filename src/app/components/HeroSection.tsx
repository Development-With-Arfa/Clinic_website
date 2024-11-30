'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import CountUp from 'react-countup';
import { type CarouselApi } from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  

const HeroSection = () => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)


    useEffect(() => {
        if (!api) {
          return
        }
     
        setCurrent(api.selectedScrollSnap())
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap())
        })
      }, [api])

  return (
    <section className='h-auto flex flex-col md:flex-row'>
        <div className="h-auto md:h-auto w-1/2 bg-[#0463FA] py-40 pl-8">
          <h2 className="font-bold text-lg md:text-4xl lg:text-5xl text-white leading-relaxed py-8">Good Health Is The Root Of All Happiness</h2>

          <div className="flex flex-col md:flex-row md:gap-10 text-white ">
              <div className="border-l-2 px-2 mt-4 h-auto flex flex-col text-left justify-center flex-wrap">
                <h3 className=" text-2xl font-semibold md:text-3xl md:font-bold tracking-wider"><CountUp end={123} duration={3}/></h3>
                <p>Expert Doctors</p>
              </div>

              <div className="border-l-2 px-2 mt-4 h-auto flex flex-col text-left justify-center flex-wrap">
                <h3 className=" text-2xl font-semibold md:text-3xl md:font-bold tracking-wider"><CountUp end={1234} duration={2}/></h3>
                <p>Medical Stuff</p>
              </div>

              <div className="border-l-2 px-2 mt-4 h-auto flex flex-col text-left justify-center flex-wrap">
                <h3 className="text-2xl font-semibold md:text-3xl md:font-bold tracking-wider"><CountUp end={12345} duration={1}/></h3>
                <p>Total Patients</p>
              </div> 
          </div>
        </div>

        <div className="md:w-1/2 h-auto">
        <Carousel className="h-fit" setApi={setApi} opts={{loop:true}}>
            <CarouselContent>
                <CarouselItem>
                    <Image 
                        src="/img/carousel-1.jpg"
                        alt="carousel-img"
                        height={400}
                        width={400}
                        className='h-auto w-full'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image 
                        src="/img/carousel-2.jpg"
                        alt="carousel-img"
                        height={400}
                        width={400}
                        className='h-auto w-full'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image 
                        src="/img/carousel-3.jpg"
                        alt="carousel-img"
                        height={400}
                        width={400}
                        className='h-auto w-full'
                    />
                </CarouselItem>
            </CarouselContent>
          <div className='flex gap-24 justify-center relative bottom-20'>
            <button className="" onClick={()=>api?.scrollTo(current - 1)}><IoIosArrowDropleft className="h-14 w-14 text-white"/></button>
            <button onClick={()=>api?.scrollTo(current + 1)}><IoIosArrowDropright className="h-14 w-14 text-white"/></button>
          </div>
        </Carousel>
        </div>
    </section>
  )
}

export default HeroSection;
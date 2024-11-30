'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { type CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
const Testimonials = () => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    
    React.useEffect(() => {
        if (!api) {
        return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
 

  return (
    <section className='h-auto w-auto py-8 px-10 flex flex-col justify-center items-center'>
        <h3 className='h-8 w-32 text-center text-[#8E8D92] border border-[#C7DCFB] rounded-full py-1'>Testimonials</h3>
        <h2 className="text-2xl lg:text-4xl font-bold py-4">What Say Our Patients!</h2>

        <Carousel className="h-auto w-5/6 lg:w-3/5  lg:px-10" setApi={setApi} opts={{loop:true}}>
        <CarouselContent>

            <CarouselItem>
                <div className='h-28 w-28 mx-auto flex items-center justify-center my-5'>
                    <Image
                        src="/img/testimonial-1.jpg"
                        alt="client-img"
                        height={100}
                        width={100}
                        className='rounded-full border-8 border-[#0463FA]'
                    />
                </div>
                <div className="w-auto px-8 py-5 bg-[#0463FA] rounded-lg text-white text-center">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h2 className="font-bold text-xl pt-5">Patient Name</h2>
                    <h3><i>Profession</i></h3>
                </div>
            </CarouselItem>

            <CarouselItem>
                <div className='h-28 w-28 mx-auto flex items-center justify-center my-5'>
                    <Image
                        src="/img/testimonial-2.jpg"
                        alt="client-img"
                        height={100}
                        width={100}
                        className='rounded-full border-8 border-[#0463FA]'
                    />
                </div>
                <div className="w-auto px-8 py-5 bg-[#0463FA] rounded-lg text-white text-center">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h2 className="font-bold text-xl pt-5">Patient Name</h2>
                    <h3><i>Profession</i></h3>
                </div>
            </CarouselItem>

            <CarouselItem>
                <div className='h-28 w-28 mx-auto flex items-center justify-center my-5'>
                    <Image
                        src="/img/testimonial-3.jpg"
                        alt="client-img"
                        height={100}
                        width={100}
                        className='rounded-full border-8 border-[#0463FA]'
                    />
                </div>
                <div className="w-auto px-8 py-5 bg-[#0463FA] rounded-lg text-white text-center">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h2 className="font-bold text-xl pt-5">Patient Name</h2>
                    <h3><i>Profession</i></h3>
                </div>
            </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </section>
  )
}

export default Testimonials
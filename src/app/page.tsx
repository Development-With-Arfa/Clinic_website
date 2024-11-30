import Image from "next/image";
import AboutUs from "./About/page";
import HeroSection from "./components/HeroSection";
import Service from "./Service/page";
import Features from "./Features/page";
import Appointment from "./Appointment/page";
import Testimonials from "./Testimonials/page";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <AboutUs/>
    <Service/>
    <Features/>
    <Appointment/>
    <Testimonials/>
   </main>
  );
}

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"
import '@/app/globals.css';

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Testimonials/>
    <CtaSection/>
    <Footer/>
    </>
      );
}

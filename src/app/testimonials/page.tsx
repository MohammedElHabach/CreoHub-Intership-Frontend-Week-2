import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonials"

const TestimonialsPage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection title={"Testimonials"} subtitle={"Echoes of satisfaction resonate through the voices of those who've experienced our offerings."} image={"testi.png"}/>
        <Testimonials/>
    </>
  )
}

export default TestimonialsPage
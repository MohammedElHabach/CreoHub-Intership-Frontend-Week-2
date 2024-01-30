import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import "@/app/globals.css";

export default function Home() {
  const customClasses = "text-darkGrayishBlue"

  return (
    <>
      <HeroSection
        title={"Bring everyone together to build better products"}
        subtitle={
          "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
        }
        image={"illustration-intro.svg"}
        customClasses={customClasses}
      />
      <Features />
      <Testimonials />
      <Contact />
      <CtaSection />
    </>
  );
}

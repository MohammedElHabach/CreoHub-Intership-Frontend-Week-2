import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
    const customClasses = "text-black"

  return (
    <>
      <HeroSection
        title={"About Us"}
        subtitle={
          "Embark on a journey with us as we weave stories of passion, purpose, and innovation – a testament to our commitment to shaping a brighter tomorrow. "
        }
        image={"about.png"}
        customClasses={customClasses}
      />
      <Features />
    </>
  );
};

export default AboutPage;

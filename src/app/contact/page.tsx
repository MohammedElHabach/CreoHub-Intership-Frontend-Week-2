import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title={"Contact"}
        subtitle={
          "Connect with us effortlessly, and let the conversation begin. Your inquiries, feedback, and aspirations matter. "
        }
        image={"Contact-us.png"}
      />
      <Contact />
    </>
  );
};

export default ContactPage;

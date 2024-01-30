import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
const ContactPage = () => {
  return (
    <>
      <HeroSection
        title={"Contact"}
        subtitle={
          "Connect with us effortlessly, and let the conversation begin. Your inquiries, feedback, and aspirations matter. "
        }
        image={"Contact-us.png"}
        customClasses={""}
      />
      <Contact />
    </>
  );
};

export default ContactPage;

import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import AccordionCustomIcon from "@/components/Accordion";
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
      <div className="xl:container mx-auto flex flex-col items-center pt-7 ">
        <AccordionCustomIcon />
      </div>
    </>
  );
};

export default ContactPage;

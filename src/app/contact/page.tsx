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
      <div className="xl:container mx-auto mt-4 ">
        <AccordionCustomIcon />
      </div>
    </>
  );
};

export default ContactPage;

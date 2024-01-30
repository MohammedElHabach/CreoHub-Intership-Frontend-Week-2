import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => {

    const customClasses = "leading-9 uppercase"

  return (
    <>
      <HeroSection
        title={"Testimonials"}
        subtitle={
          "Echoes of satisfaction resonate through the voices of those who've experienced our offerings."
        }
        image={"testi.webp"}
        customClasses={customClasses}
      />
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;

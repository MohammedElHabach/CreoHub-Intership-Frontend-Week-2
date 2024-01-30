const HeroSection = ({ title, subtitle, image }) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className=" max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            {title}
          </h1>

          <p className=" text-darkGrayishBlue max-w-sm text-center md:text-left">
            {subtitle}
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="px-5 p-2 text-white transition duration-300 ease-in-out bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right part */}
        <div className="md:w-1/2">
          <img src={`/${image}`} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

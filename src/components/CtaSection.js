const CtaSection = () => {
  return (
    <section id="cta">
      <div className="  mt-24 bg-brightRed flex justify-between items-center px-6 py-16">
        <h2 className="text-bold text-white text-4xl md:w-1/2 ">
          Simplify how your team works today.
        </h2>
        <div>
          <a
            href="#"
            className="hidden px-5 p-2 text-brightRed bg-white rounded-full  hover:bg-brightRedLight hover:text-white md:block"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

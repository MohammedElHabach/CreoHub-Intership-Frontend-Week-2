const CtaSection = () => {
  return (
    <section className=" bg-brightRed" >
      <div id="cta" className="xl:container xl:mx-auto  mt-24  flex justify-between items-center px-6 py-16  ">
        <h2 className="text-bold text-white text-4xl md:w-1/2 ">
          Simplify how your team works today.
        </h2>
        <div>
          <a
            href="#"
            className="hidden px-5 p-2 text-brightRed bg-white transition duration-300 ease-in-out rounded-full  hover:bg-brightRedLight hover:text-white md:block"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

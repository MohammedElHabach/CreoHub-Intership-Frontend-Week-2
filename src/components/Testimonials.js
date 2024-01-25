const Testimonials = () => {
  return (
    <section id="testimonials" className="px-4 sm:px-0">
      <div className="mx-auto container  mt-32 ">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>

        <div className="flex flex-col gap-y-20 mt-24  text-center md:text-left md:gap-x-8 lg:gap-x-16 md:justify-between  md:flex-row md:flex-wrap  ">
          <div className="flex flex-col items-center rounded-lg p-6 hover:cursor-pointer  hover:scale-110 transition-transform duration-500 ease bg-veryLightGray space-y-5 md:w-2/5 lg:w-1/4 ">
            <div>
              <img
                className="w-16 -mt-16"
                src="/avatar-anisha.png"
                alt="avatar"
              />
            </div>
            <h4 className="font-bold text-xl">Carmen</h4>
            <p className="text-darkGrayishBlue text-justify">
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <div className="flex flex-col items-center p-6 hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease bg-veryLightGray space-y-5 md:w-2/5 rounded-lg lg:w-1/4 ">
            <div>
              <img
                className="w-16 -mt-16"
                src="/avatar-richard.png"
                alt="avatar"
              />
            </div>
            <h4 className="font-bold text-xl">Richard</h4>
            <p className="text-darkGrayishBlue text-justify">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <div className="flex flex-col items-center p-6 hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease bg-veryLightGray space-y-5 md:w-3/4 md:mx-auto lg:mx-0 lg:w-1/4 rounded-lg ">
            <div>
              <img
                className="w-16 -mt-16"
                src="/avatar-shanai.png"
                alt="avatar"
              />
            </div>
            <h4 className="font-bold text-xl">May</h4>
            <p className="text-darkGrayishBlue text-justify">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className=" px-5 p-2 text-white transition duration-300 ease-in-out bg-brightRed rounded-full  hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

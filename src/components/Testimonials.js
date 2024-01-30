const Testimonials = () => {

  const data= [
    {
      img:"avatar-anisha.png",
      title:"Carmen",
      desc:"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
    },
    {
      img:"avatar-richard.png",
      title:"Richard",
      desc:"We have been able to cancel so many other subscriptions sinceusing Manage. There is no more cross-channel confusion and everyone is much more focused."
    },
    {
      img:"avatar-shanai.png",
      title:"May",
      desc:"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
    }
  ]

  return (
    <section id="testimonials" className="px-4 sm:px-0">
      <div className="mx-auto container  mt-32 ">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>

        <div className="flex flex-col gap-y-20 mt-24  text-center md:text-left md:gap-x-8 lg:gap-x-16 md:justify-between  md:flex-row md:flex-wrap  ">
          {data.map((elt) => (
            <div key={elt.title} className="flex flex-col items-center rounded-lg p-6 hover:cursor-pointer  hover:scale-110 transition-transform duration-500 ease bg-veryLightGray space-y-5 md:w-2/5 lg:w-1/4 ">
            <div>
              <img
                className="w-16 -mt-16"
                src={`/${elt.img}`}
                alt="avatar"
              />
            </div>
            <h4 className="font-bold text-xl">{elt.title}</h4>
            <p className="text-darkGrayishBlue text-justify">
              "{elt.desc}"
            </p>
          </div>

          ))}
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

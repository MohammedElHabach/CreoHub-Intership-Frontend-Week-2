import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-veryDarkBlue ">
      <div className="flex flex-col items-center  justify-between lg:mx-8  py-10  space-y-10 md:flex-row-reverse md:space-y-0 xl:container xl:mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-y-4  space-x-3">
          <input
            type="email"
            className="rounded-full py-1 px-1  pl-5 focus:outline-none"
            placeholder="Updated in your inbox"
          />
          <button className="text-white bg-brightRed hover:bg-brightRedLight rounded-full px-3">
            Go
          </button>
        </div>

        <div className="flex justify-center space-x-7">
          <div className="flex flex-col text-white space-y-3">
            <a className="transition-colors duration-500 hover:text-darkGrayishBlue" href="/">Home</a>
            <a className="transition-colors duration-500 hover:text-darkGrayishBlue" href="#testimonials">Testimonials</a>
          </div>

          <div className="flex flex-col text-white space-y-3">
            <a className="transition-colors duration-500 hover:text-darkGrayishBlue" href="#features">About</a>
            <a className="transition-colors duration-500 hover:text-darkGrayishBlue" href="#contact">Contact</a>
          </div>
        </div>

        <div className="space-y-5 flex justify-center flex-col mx-8">
         <Link href="/">
         <img className=" max-w-40 mx-auto" src="/logo-white.svg" alt="logo" />
         </Link> 
          <div className="flex justify-center space-x-7 sm:pt-2 md:pt-0">
            <img
              className="h-8 hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in"
              src="/icon-youtube.svg"
              alt="icon"
            />
            <img
              className="h-8 hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in"
              src="/icon-instagram.svg"
              alt="icon"
            />
            <img
              className="h-8 hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in"
              src="/icon-pinterest.svg"
              alt="icon"
            />
            <img
              className="h-8 hover:cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in "
              src="/icon-facebook.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const marginTopClass = pathname !== "/" ? "mt-8" : "";

  return (
    <footer className={`bg-veryDarkBlue ${marginTopClass}`}>
      <div className="flex flex-col items-center  justify-between   py-10  space-y-10 md:flex-row-reverse md:space-y-0 xl:container mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-y-4  space-x-3">
          <input
            type="email"
            className="rounded-full py-1 px-1  pl-5 focus:outline-none"
            placeholder="Updated in your inbox"
          />
          <button className="text-white transition duration-300 ease-in-out bg-brightRed hover:bg-brightRedLight rounded-full px-3 py-1">
            Go
          </button>
        </div>

        <div className="flex justify-center space-x-7">
          <div className="flex flex-col text-white space-y-3">
            <Link
              className="transition-colors duration-500 hover:text-darkGrayishBlue"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors duration-500 hover:text-darkGrayishBlue"
              href="/testimonials"
            >
              Testimonials
            </Link>
          </div>

          <div className="flex flex-col text-white space-y-3">
            <Link
              className="transition-colors duration-500 hover:text-darkGrayishBlue"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors duration-500 hover:text-darkGrayishBlue"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-5 flex justify-center flex-col mx-8">
          <Link href="/">
            <img
              className=" max-w-40 mx-auto"
              src="/logo-white.svg"
              alt="logo"
            />
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

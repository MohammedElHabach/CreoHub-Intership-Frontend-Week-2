"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const activeLinkColor = "text-brightRed"
  const pathname = usePathname()

  const handleOpenMenu = () => {
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')
    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
  }

  return (
    <nav className=" relative xl:container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link href="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
        
          <Link href="/about" className={` ${pathname === "/about" ? 'text-brightRed':'transition-colors  duration-500 hover:text-darkGrayishBlue'}`}>
            About Us
          </Link>
          <Link href="/testimonials" className={` ${pathname === "/testimonials" ? 'text-brightRed':'transition-colors  duration-500 hover:text-darkGrayishBlue'}`}>
            Testimonials
          </Link>
          <Link href="/contact" className={` ${pathname === "/contact" ? 'text-brightRed':'transition-colors  duration-500 hover:text-darkGrayishBlue'}`}>
            Contact
          </Link>
        </div>
        <a
          href="#"
          className="hidden px-5 p-2 text-white bg-brightRed rounded-full baseline transition duration-300 ease-in-out hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button
        onClick={handleOpenMenu}
          id="menu-btn"
          className="  block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <Link onClick={handleOpenMenu} href="/about">About Us</Link>
          <Link  onClick={handleOpenMenu} href="/testimonials">Testimonials</Link>
          <Link onClick={handleOpenMenu} href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

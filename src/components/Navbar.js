"use client";
import Link from "next/link";

const Navbar = () => {
  const handleOpenMenu = () => {
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')
    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
  }

  return (
    <nav className=" relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link href="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-darkGrayishBlue">
            Pricing
          </Link>
          <a href="#testimonials" className="hover:text-darkGrayishBlue">
            Testimonials
          </a>
          <Link href="/" className="hover:text-darkGrayishBlue">
            About Us
          </Link>
          <Link href="#" className="hover:text-darkGrayishBlue">
            Careers
          </Link>
        </div>
        <a
          href="#"
          className="hidden px-5 p-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
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
          <Link onClick={handleOpenMenu} href="">Pricing</Link>
          <Link  onClick={handleOpenMenu} href="#testimonials">Testimonials</Link>
          <Link onClick={handleOpenMenu} href="#">About Us</Link>
          <Link onClick={handleOpenMenu} href="#">Careers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";

const Navbar = () => {
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
          <Link href="/#testimonials" className="hover:text-darkGrayishBlue">
            Testimonials
          </Link>
          <Link href="/" className="hover:text-darkGrayishBlue">
            About Us
          </Link>
          <Link href="#" className="hover:text-darkGrayishBlue">
            Careers
          </Link>
        </div>
        <a
          href="#"
          class="hidden px-5 p-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

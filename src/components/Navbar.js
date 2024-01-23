
const Navbar = () => {
  return (
    <nav className=" relative container mx-auto bg-slate-300 p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src="/logo.svg" alt="logo" />
            </div>

            <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                <a href="#" className="hover:text-darkGrayishBlue">Community</a>
            </div>

            <button className="hidden md:block bg-brightRed p-3 px-6 py-2 rounded-full text-white hover:bg-brightRedLight">Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar
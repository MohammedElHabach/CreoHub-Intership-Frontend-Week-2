import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-veryDarkBlue ">
      <div className="flex flex-col  justify-between lg:mx-8  py-10  space-y-10 md:flex-row-reverse md:space-y-0">
        <div className="flex justify-center items-center  space-x-3">
          <input
            type="email"
            className="rounded-full py-1 px-1  focus:outline-none"
            placeholder="Updated in your inbox"
          />
          <button className="text-white bg-brightRed rounded-full px-3">
            Go
          </button>
        </div>

        <div className="flex justify-center space-x-7">
          <div className="flex flex-col text-white space-y-3">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
          </div>

          <div className="flex flex-col text-white space-y-3">
            <a href="#">Careers</a>
            <a href="#">About</a>
            <a href="#">Community</a>
          </div>
        </div>

        <div className="space-y-5 flex justify-center flex-col mx-8">
         <Link href="/">
         <img className=" max-w-40 mx-auto" src="/logo-white.svg" alt="logo" />
         </Link> 
          <div className="flex justify-center space-x-7">
            <img
              className="h-8 hover:cursor-pointer"
              src="/icon-youtube.svg"
              alt="icon"
            />
            <img
              className="h-8 hover:cursor-pointer"
              src="/icon-instagram.svg"
              alt="icon"
            />
            <img
              className="h-8 hover:cursor-pointer"
              src="/icon-pinterest.svg"
              alt="icon"
            />
            <img
              className="h-8 hover:cursor-pointer"
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

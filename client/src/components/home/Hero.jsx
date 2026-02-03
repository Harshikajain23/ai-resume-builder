import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <>
      {/* Font should ideally go in index.html or global CSS */}
      <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full h-screen overflow-hidden bg-no-repeat bg-cover bg-center text-sm">

        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
          
          {/* Logo */}
          <a href="/">
            <img src="/logo.svg"/>
          </a>

          {/* Menu */}
          <div
            className={`flex items-center gap-8 text-[16px]
            max-md:absolute max-md:top-0 max-md:left-0 max-md:h-full
            max-md:flex-col max-md:justify-center max-md:bg-white/50
            max-md:backdrop-blur max-md:transition-all max-md:duration-300
            ${menuOpen ? "max-md:w-full" : "max-md:w-0 overflow-hidden"}`}
          >
            <a href="#" className=" text-black hover:text-[#741a74]">Home</a>

            <a href="#features" className="text-black hover:text-[#741a74]">Features</a>
              <a href="#testimonials" className="text-black hover:text-[#741a74]">Testimonials</a>
            <a href="#contact" className="text-black hover:text-[#741a74]">Contact</a>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden bg-gray-800 text-white p-2 rounded-md"
            >
              ✕
            </button>
          </div>

          {/* Desktop Button */}
          <div className="flex flex-row">
        
          
          <button className="hidden md:block bg-[#741a74] hover:bg-[#330a36] text-white px-6 py-3 mr-5 rounded-full cursor-pointer">
            Sign Up
          </button>
        

            <Link to='/app?state=login'>
           <button className="hidden md:block bg-[#741a74]  hover:bg-[#330a36] text-white px-6 py-3 cursor-pointer rounded-full">
            Login
          </button>
          </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden bg-[#521a4ef3] text-white p-2 rounded-md"
          >
            ☰
          </button>
        </nav>

        
            <br/>
            <br/>
            
        {/* Heading */}
        <h5 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-8">
         Land your dream job with <span className="bg-gradient-to-r from-[#ad1782cc] to-[#521042f2] bg-clip-text text-transparent text-nowrap">
            AI-Powered resumes
         </span> 
        </h5>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6">
          Create, edit and download professional resumes with AI-powered assistance.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center gap-3 mt-4">
            <Link to="/app?state=register">
          <button className="flex text-xl items-center bg-[#521a4ef3] hover:bg-[#330a36] text-white px-6 py-3 rounded-full cursor-pointer">
            Get Started
            <FiArrowRight size={18} />
          </button>
          </Link>
          
        </div>

      </section>
    </>
  );
};

export default Hero;

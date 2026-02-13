import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-40 flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-[#F8ECE0] via-[#b60ca255]/50 to-[#F8ECE0]">
        <div className="flex flex-wrap items-start gap-5 md:gap-7.5 xl:gap-[100px]">
          <a href="#">
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
          </a>
          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  AI Resume Review
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Resume Templates
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Resume Tips
                </a>
              </li>
        
               <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Community
                </a>
              </li>
              <li>
                <a href="/" className="hover:[#9b188cf7]-600 transition">
                  Careers
                  <span className="text-xs text-white bg-[#9b188cf7] rounded-md ml-2 px-2 py-1">
                    We’re hiring!
                  </span>
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  FAQs
                </a>
              </li>
              
              
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#9b188cf7] transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-slate-800 flex flex-col max-md:items-center max-md:text-center gap-2 items-start">
          <p className="max-w-60">
            Helping you craft resumes that actually get noticed.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <a
              href="https://dribbble.com/prebuiltui"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dribbble size-5 hover:text-[#9b188cf7]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/prebuiltui"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin size-5 hover:text-[#9b188cf7]"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
             
            </a>
          </div>
          <p className="mt-3 text-center">
            © 2026 Resume Builder
          </p>
        </div>
      </footer>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </>
  );
};

export default Footer;

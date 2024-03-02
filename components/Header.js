import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
           <img  width ="40" height ="40 "src="data:image/png;base64,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" alt="" />
          <a
            href="/"
            className="flex text-3xl text-white ml-4 font-medium mb-4 md:mb-0 "
          >
             VdoCipher
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            
            <a className="mr-11 pr-2 cursor-pointer text-white hover:text-white font-semibold tr04">
              Features
            </a>
            <div className="relative">
              <button
                type="button"
                className="
                   group rounded-md text-white inline-flex items-center text-base font-semibold focus:outline-none pb-8'
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span className="tr04">Resources</span>
                <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-white group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          SOLUTIONS
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          First Template
                        </p> */}
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          PRICING
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          Second Template
                        </p> */}
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          ABOUT
                        </p>
                        {/* <p className="mt-1 text-sm text-gray-500">
                          Third Template
                        </p> */}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <a className="mr-12 md:ml-11 ml-0 cursor-pointer text-white hover:text-white font-semibold tr04">
              Developer
            </a>
            <a className="mr-5 cursor-pointer text-white hover:text-white font-semibold tr04">
              Contact
            </a>
          </div>
          <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible"
          >
           <button className="mr-2 cursor-pointer text-white hover:text-white font-semibold tr04 bg-indigo-500 px-4 py-2 rounded">
            Sign Up
          </button>
          </a>
          <a
            data-v-54e46119=""
            href="https://github.com/PriyeshPandey2000"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-7 invisible md:visible"
          >
            <button className="cursor-pointer text-white hover:text-white font-semibold tr04 px-4 py-2 rounded border border-indigo-500">
            Login
          </button>
          </a>
        </div>
      </div>
    </header>
  );
}

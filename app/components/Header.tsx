import { Link } from "@remix-run/react"
import HeaderButton from "./HeaderButton";
import { headerButtonData } from "../data/headerButtonData";
import { useState } from 'react';
import ContactModal from "./ContactModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const buttons = headerButtonData
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-gray-50 fixed w-full top-0 z-50 shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center text-center sm:text-left md:justify-center sm:justify-center xs:justify-center">
              <Link to="/" className="flex items-center">
                <img
                  alt="P412 logo"
                  src="/assets/logos/p412.png"
                  className="h-18 w-28 mr-1 hidden sm:block"
                />
                <div onClick={() => setIsOpen(false)}>
                  <h1 className="text-2xl font-bold italic text-gray-900 sm:text-3xl sm:inline-block text-left">Project 412 Cycling</h1>
                  <p>Pittsburgh's Domestic Elite Cycling Team</p>
                </div>
              </Link>

              <button className="sm:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>



            <div className={`mt-4 flex gap-4 flex-col sm:flex-row justify-center items-center ${isOpen ? 'block' : 'hidden sm:flex'}`}>
              {buttons.map((button) => (
                <div key={button.title} className="w-full ">
                  <HeaderButton title={button.title} link={button.link} setIsOpen={setIsOpen} />
                </div>
              ))}

              {/* <a
                href="mailto:shawnwilsontrpt@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-secondary hover:border-primary focus:outline-none focus:ring w-full"
              >
                <span className="text-sm font-medium whitespace-nowrap"> Contact us </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a> */}

              <button onClick={handleOpenModal} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-secondary hover:border-primary focus:outline-none focus:ring w-full">
                <span className="text-sm font-medium whitespace-nowrap"> Contact us </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      </header >
    </>
  );
}
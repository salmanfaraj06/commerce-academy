import React from "react";
import { FaArrowUp, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-black-900 text-white-A700_01">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="absolute top-4 right-6 sm:top-6 lg:right-10 lg:top-8">
          <a
            className="inline-block rounded-full p-2 shadow transition sm:p-3 lg:p-4 bg-gray-700 text-white hover:bg-gray-600"
            href="#"
          >
            <span className="sr-only">Back to top</span>
            <FaArrowUp className="h-5 w-5" />
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <img src={logo} alt="Your Logo" className="h-32 md:-ml-6" />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 lg:text-left">
            Mastering Business, Building Success
            </p>
          </div>

          <nav className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#whyus"
                >
                  Why us
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:gap-6 sm:px-6 lg:px-8">
          <a
            className="text-center text-sm text-blue-500 underline hover:text-blue-700 sm:text-left mx-auto"
            href="https://salmanfr.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2024 Salman Faraj | All rights reserved
          </a>

          <div className="flex gap-6">
            <a
              className="text-white transition hover:text-white/75"
              href="https://www.instagram.com/commerce.academy_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>

            <a
              className="text-white transition hover:text-white/75"
              href="https://wa.me/+94743810210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="text-center lg:text-left">
            <Image src="/logo.png" alt="Logo" width={150} height={40} />

            <p className="mt-4 text-sm text-gray-500">
              Simplifying lives with our services. Join us to explore more.
            </p>
          </div>

          <ul className="mt-6 flex justify-center space-x-8 lg:mt-0 lg:justify-end">
            <li>
              <a className="text-gray-600 transition hover:text-blue-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-600 transition hover:text-blue-500" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-600 transition hover:text-blue-500" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-600 transition hover:text-blue-500" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center border-t pt-4 text-sm text-gray-500">
          <p className="text-center lg:text-left">
            &copy; 2022. All rights reserved.
          </p>
          <a
            className="inline-block bg-blue-600 text-white p-2 rounded-full shadow transition hover:bg-teal-500"
            href="/"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
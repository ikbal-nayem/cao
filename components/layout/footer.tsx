"use client";

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Chief advisor office of Bangladesh
              <br />
              Tejgaon, Dhaka-1215
              <br />
              Phone: +880-2-XXXXXXXX
              <br />
              Fax: +880-2-XXXXXXXX
              <br />
              Email: info@cao.gov.bd
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Regulations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  President's Office (Bangabhaban)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cabinet Division
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Ministry of Public Administration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Bangladesh National Information Portal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Chief advisor office. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
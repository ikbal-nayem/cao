"use client";

import { FC } from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Chief Adviser office of Bangladesh<br />Tejgaon, Dhaka-1215</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+880-2-XXXXXXXX</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@cao.gov.bd</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/administration/programs" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tenders-notice/notices" className="text-gray-300 hover:text-white">
                  Regulations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="http://www.bangabhaban.gov.bd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  President's Office (Bangabhaban)
                </a>
              </li>
              <li>
                <a href="https://cabinet.gov.bd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Cabinet Division
                </a>
              </li>
              <li>
                <a href="https://mopa.gov.bd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Ministry of Public Administration
                </a>
              </li>
              <li>
                <a href="https://bangladesh.gov.bd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Bangladesh National Information Portal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Theme:</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Chief Adviser office. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
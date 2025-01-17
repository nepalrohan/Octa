import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative mt-4">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-40 -z-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-8 md:px-16 gap-10 md:gap-0 text-gray-600 dark:text-gray-400">
        {/* Quick Links Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-extrabold text-gray-700 dark:text-gray-300 underline">Quick Links</h1>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-500 transition">All Products</Link>
          </div>
        </div>

        {/* Logo and Rights */}
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300">Octa</h1>
          <h1 className="text-sm font-medium">&copy; 2024 Octa. All rights reserved.</h1>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300">Contact Us</h1>
          <h1 className="text-sm font-medium"><span className="font-bold">Phone:</span> 071485167</h1>
          <h1 className="text-sm font-medium"><span className="font-bold">Email:</span> octa.enquiry@gmail.com</h1>
          <h1 className="text-sm font-medium"><span className="font-bold">Customer Care:</span> 071684275</h1>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 py-4 border-t border-gray-300 dark:border-gray-600">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-red-600 transition">
          <FaYoutube size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-purple-600 transition">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-black transition">
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

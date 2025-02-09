"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/Logo.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const router = useRouter();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        {/* Navbar with reduced height on small screens */}
        <nav className="fixed w-full flex justify-center items-center bg-black shadow-md z-50 h-20 md:h-24">
          <div className="container mx-auto flex justify-between h-full px-4">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold  ">
                <Image src={logo} alt="Logo" width={90} height={90} className="lg:w-24 lg:h-24 h-16 w-16" />
              </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Centered Links (Hidden on small screens) */}
            <div className="hidden md:flex mt-2 items-center bg-[#202020] h-12 rounded-lg text-lg">
              <button
                onClick={() => handleScrollToSection("project")}
                className="text-gray-400 hover:text-white px-4"
              >
                Project
              </button>
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-gray-400 hover:text-white px-4"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-gray-400 hover:text-white px-4"
              >
                Contact
              </button>
              <button
                onClick={() => router.push("/skill")}
                className="text-gray-400 hover:text-white px-4"
              >
                Skill
              </button>
            </div>

            {/* Optional: Placeholder for right-aligned content */}
            <div className="hidden md:flex items-center">
              {/* Add right-aligned content here if needed */}
            </div>
          </div>
        </nav>

        {/* Mobile Menu (Visible on small screens) */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full bg-black z-40 md:hidden">
            <div className="flex flex-col items-center py-4">
              <button
                onClick={() => handleScrollToSection("project")}
                className="text-gray-400 hover:text-white py-2"
              >
                Project
              </button>
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-gray-400 hover:text-white py-2"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-gray-400 hover:text-white py-2"
              >
                Contact
              </button>
              <button
                onClick={() => router.push("/skill")}
                className="text-gray-400 hover:text-white py-2"
              >
                Skill
              </button>
            </div>
          </div>
        )}

        <main className="pt-16 md:pt-24">{children}</main>



        <div className="w-full border border-y-4 p-5 mt-10">
  {/* Flex container for logo, email/mobile, and icons */}
  <div className="flex flex-col lg:flex-row items-center justify-between">
    {/* Logo on the left */}
    <div className="flex-shrink-0 mb-4 lg:mb-0">
      <Image src={logo} alt="Logo" width={50} height={50} />
    </div>

    {/* Email and Mobile in the center */}
    <div className="flex flex-col lg:flex-row justify-center lg:gap-20 items-center space-y-4 lg:space-y-0 flex-grow mx-4">
      <div className="flex flex-col justify-start text-center lg:text-left">
        <h1 className="text-base font-medium">Email</h1>
        <p className="text-xl font-medium">mallikjanb@gmail.com</p>
      </div>
      <div className="flex flex-col justify-start text-center lg:text-left">
        <h1 className="text-base font-medium">Mobile</h1>
        <p className="text-xl font-medium">+91 8884981840</p>
      </div>
    </div>

    {/* Icons on the right */}
    <div className="flex-shrink-0 flex space-x-4 mt-4 lg:mt-0">
      <FaXTwitter className="w-8 h-8" />
      <FaLinkedin className="w-8 h-8" />
      <FaInstagram className="w-8 h-8" />
    </div>
  </div>

  {/* Footer text */}
  
</div>
<div className="flex flex-col lg:flex-row justify-between text-lg font-medium mt-6 mx-4 lg:mx-10 text-center lg:text-left">
    <p className="mb-2 lg:mb-0">Crafted with ❤️ by Mallikjan</p>
    <p>© {new Date().getFullYear()} Mallikjan. All rights reserved.</p>
  </div>
      </body>
    </html>
  );
}
import Image from "next/image";
import Logo from "@/public/Logo.png";

const Footer = () => {
  return (
    <div className="bg-[#212121] flex flex-col items-center py-12 text-white">
      {/* Logo */}
      <Image src={Logo} alt="logo" width={150} height={150} className="mb-4" />

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-8 mt-6 mb-6 text-lg">
        <li className="cursor-pointer hover:text-primary transition duration-300">
          Home
        </li>
        <li className="cursor-pointer hover:text-primary transition duration-300">
          Menu
        </li>
        <li className="cursor-pointer hover:text-primary transition duration-300">
          About Us
        </li>
        <li className="cursor-pointer hover:text-primary transition duration-300">
          Reviews
        </li>
      </ul>

      {/* Divider */}
      <div className="bg-[#454545] w-full h-[0.5px] my-6" />

      {/* Footer Sections */}
      <div className="px-8 sm:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full text-center">
        {/* Address Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-semibold">Address</h1>
          <p className="text-secondary">
            123 Maplewood Avenue, Suite 5, Springfield, CA 90210
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-semibold">Contact</h1>
          <p className="text-secondary">P: +1 (234) 567 890</p>
          <p className="text-secondary">P: +0 (987) 654 321</p>
          <p className="text-secondary">@mb7899011@gmail.com</p>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-semibold">Book a Table!</h1>
          <p className="text-secondary">Made by Muhammad Bilal</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center gap-8">
        <a href="#" className="cursor-pointer transition duration-300">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="cursor-pointer transition duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="cursor-pointer transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="cursor-pointer transition duration-300">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-sm text-gray-400">
        <p>&copy; 2024 Foody. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

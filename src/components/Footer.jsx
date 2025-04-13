import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-300 py-6 mt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get In Touch */}
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">GET IN TOUCH</h2>
            <ul className="flex flex-col gap-4">
              <li>+92 42 111178956</li>
              <li>support@shop.com</li>
            </ul>
          </div>

          {/* Information */}
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">INFORMATION</h2>
            <ul className="flex flex-col gap-4">
              <li>Online Order Tracking</li>
              <li>Shipping Policy</li>
              <li>Returns & Exchange Policy</li>
              <li>Discount Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">About</h2>
            <ul className="flex flex-col gap-4">
              <li>Our Story</li>
              <li>Career@apna</li>
              <li>Contact Us</li>
              <li>Blogs</li>
              <li>Download Your App</li>
              <li>Terms of Service</li>
              <li>Store Locations</li>
              <li>Join Franchise</li>
            </ul>
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">Sign in And Sign Up</h2>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-md border border-gray-400 mb-2 sm:mb-0 w-full sm:w-auto"
              />
              <button className="bg-blue-950 text-white py-2 px-4 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Contactbanner = () => {
  return (
    <div className="relative w-full h-[60vh] bg-gray-900">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contact Banner Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 md:px-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We are here to help you find the perfect camera and accessories. Have questions or need advice? Feel free to reach out to our team!
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactbanner;

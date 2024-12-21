import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/XzqYQxk/close-up-hand-holding-professional-dslr-camera.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 md:px-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Us - Your Trusted Camera Shop
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide high-quality cameras and accessories for photographers of
            all levels. From beginner-friendly models to professional gear, we
            have something for everyone.
          </p>
          <a
            href="#more-info"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;

/* eslint-disable react/no-unescaped-entities */

const Aboutdes = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome to Your Trusted Camera Shop
        </h2>
        <p className="text-lg text-center text-gray-400 mb-12">
          We are a passionate team dedicated to providing high-quality cameras and accessories for photographers of all levels. Whether you're a beginner, hobbyist, or professional, we have the perfect gear to help you capture the moments that matter most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center bg-gray-800 rounded-lg p-8 shadow-lg">
            <img
              src="https://i.ibb.co.com/p1QspJx/download.jpg"
              alt="Camera Shop"
              className="rounded-lg w-full p-20 h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-lg text-gray-300 mb-6">
              Founded by a group of passionate photographers, our shop was born out of the desire to make professional-grade cameras accessible to everyone. We handpick every product, ensuring that each camera and accessory we offer meets our high standards of performance and reliability.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We believe that photography is more than just a hobby—it's an art. Our mission is to empower photographers to create stunning visuals with the best tools in the industry. Whether you're capturing landscapes, portraits, or anything in between, we provide the equipment that elevates your work.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With a wide range of cameras including DSLR, mirrorless, and compact models, we have something for every photographer. Our expert team is always ready to assist you in finding the perfect gear, and our competitive prices ensure you get the best value for your investment.
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors mt-6 text-center w-full md:w-auto"
            >
              Get in Touch with Us
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Our shop isn't just about selling cameras—it's about creating lasting relationships with photographers. We offer:
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Expert Advice</h4>
              <p className="text-gray-400">Our team of photographers is always available to guide you in choosing the right gear for your needs.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Wide Selection</h4>
              <p className="text-gray-400">We offer a wide range of cameras, lenses, and accessories from top brands to suit all budgets and skill levels.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Customer Satisfaction</h4>
              <p className="text-gray-400">We prioritize customer satisfaction, offering quick support, warranties, and easy returns on all purchases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutdes;

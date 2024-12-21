import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can integrate form submission logic (like sending the data to an API or service).
    console.log("Form submitted:", formData);
    // Reset the form after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-lg text-center text-gray-400 mb-12">
          We would love to hear from you! Whether you have questions about our cameras, need support, or want to get in touch for any other reason, feel free to send us a message.
        </p>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-gray-700 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-lg font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-lg font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-lg font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co.com/4Y9h07t/20943705-prev-ui.png"
              alt="Camera Shop"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

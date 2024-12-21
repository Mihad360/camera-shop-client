import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, TechCorp",
      feedback:
        "This product has transformed the way we operate. The seamless design and incredible features are unmatched!",
      image: "https://i.ibb.co.com/zhHMVRB/download-removebg-preview-21.png", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager, MarketGenius",
      feedback:
        "I highly recommend this service to anyone looking for reliability and quality. It's simply outstanding.",
      image: "https://i.ibb.co.com/cx5Xxs3/download-removebg-preview-23.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Freelancer",
      feedback:
        "Exceptional customer support and fantastic results. Couldn't ask for a better experience!",
      image: "https://i.ibb.co.com/g3XdgSV/download-removebg-preview-22.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

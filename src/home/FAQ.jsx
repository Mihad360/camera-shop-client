import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of cameras do you offer?",
      answer:
        "We offer a wide range of cameras, including DSLRs, mirrorless cameras, action cameras, and professional-grade camcorders. Check out our catalog for more details.",
    },
    {
      question: "Do you provide a warranty for the cameras?",
      answer:
        "Yes, all our cameras come with a manufacturer’s warranty, typically ranging from 1 to 3 years depending on the brand.",
    },
    {
      question: "Can I trade in my old camera for a new one?",
      answer:
        "Yes, we offer a trade-in program where you can exchange your old camera for credit toward a new purchase. Terms and conditions apply.",
    },
    {
      question: "Do you offer camera accessories?",
      answer:
        "Absolutely! We have a wide range of camera accessories, including lenses, tripods, memory cards, and carrying cases to enhance your photography experience.",
    },
    {
      question: "Is there support for beginners in photography?",
      answer:
        "Yes, we provide beginner photography guides and tutorials on our website. We also host photography workshops and classes regularly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-gray-800 px-6 py-4 text-left text-gray-100 hover:bg-gray-700 focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="bg-gray-800 px-6 py-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

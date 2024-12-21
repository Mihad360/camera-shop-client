import React from "react";
import Marquee from "react-fast-marquee";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "DSLR",
      description: "Experience the power of DSLR cameras for professional-grade photography.",
      image: "https://i.ibb.co.com/MCh35v2/download-removebg-preview-18.png",
    },
    {
      id: 2,
      name: "Mirrorless",
      description: "Compact and versatile mirrorless cameras for modern photographers.",
      image: "https://i.ibb.co.com/NnS5X2L/download-removebg-preview-17.png",
    },
    {
      id: 3,
      name: "Compact",
      description: "Lightweight and portable compact cameras for everyday use.",
      image: "https://i.ibb.co.com/N3pFy3G/images-removebg-preview.png",
    },
    {
      id: 4,
      name: "Bridge Cameras",
      description: "The perfect bridge between compact and DSLR cameras.",
      image: "https://i.ibb.co.com/6wwwtJb/download-removebg-preview-19.png",
    },
    {
      id: 5,
      name: "Others",
      description: "Explore specialty cameras and unique photography gear.",
      image: "https://i.ibb.co.com/8bQPBfh/download-removebg-preview-20.png",
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Explore Our Categories
        </h2>
        <Marquee gradient={false} speed={70} className="space-x-6">
          <div className="flex space-x-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800 min-w-[250px] rounded-lg shadow-lg p-6 flex-shrink-0"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-60 mx-auto h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-400">{category.description}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Categories;

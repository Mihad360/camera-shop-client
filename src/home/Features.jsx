import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Features = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchProducts = () => {
      try {
        axios.get("http://localhost:5000/products").then(res => {
            setProducts(res.data)
        })
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Our Feature Products
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Explore the unique features that make us stand out.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.length > 0 ? (
            products?.slice(0,6).map((product, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg p-6 text-center"
              >
                <div className="mb-4">
                  <div className="w-40 h-40 mx-auto flex items-center justify-center bg-blue-200 rounded-full">
                    <img
                      src={product.image}
                      alt={`${product.title} icon`}
                      className="w-24 h-24 object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description.slice(0,100)}</p>
                <Link to='/products' className="px-6 py-2 flex justify-center items-center gap-3 bg-blue-600 text-gray-100 font-semibold text-lg hover:bg-blue-500 duration-150 hover:transition-all hover:scale-105 rounded-lg focus:ring-2 focus:ring-blue-400  mt-4">Explore Products</Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Loading features...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;

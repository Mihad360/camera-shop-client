import { useEffect, useState } from "react";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
import SortMethod from "./SortMethod";
import useAxiospublic from "../hooks/useAxiospublic";
import Loading from "../components/Loading";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiospublic();
  console.log(products);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      axiosPublic.get("/products").then((res) => {
        console.log(res.data);
        setLoading(false);
        setProducts(res.data);
      });
    };
    fetchProducts();
  }, [axiosPublic]);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto ">
        <div>
          <SearchInput></SearchInput>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <SortMethod></SortMethod>
          </div>
          <div>
            <Filter></Filter>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-center text-blue-500 text-2xl font-semibold py-6">All Products</h1>
        <div className="flex justify-center">
          {loading ? (
            <Loading></Loading>
          ) : (
            <div>
              {products?.length === 0 ? (
                <p className="text-red-500 font-bold text-center text-xl mt-32">
                  No products available
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products?.map((item) => (
                    <ProductCard key={item._id} item={item}></ProductCard>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

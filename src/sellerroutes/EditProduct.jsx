import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiossecure from "../hooks/useAxiossecure";

const EditProduct = () => {
  const item = useLoaderData();
  const axiosSecure = useAxiossecure()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const productInfo = {
      title: data.title,
      category: data.category,
      price: parseFloat(data.price),
      description: data.description,
      brand: data.brand,
      stock: parseFloat(data.stock),
      image: data.image,
      discount: parseFloat(data.discount),
    };
    axiosSecure.patch(`/products/${item._id}`,productInfo)
    .then(res => {
        if(res?.data.modifiedCount > 0){
            console.log(res);
        }
    })
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-5xl px-6 py-8 bg-gray-800 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
            Edit Product
          </h2>

          <div className="space-y-3">
            {/* Title Input */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  defaultValue={item?.title}
                  {...register("title", { required: "Title is required" })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Image Link Input */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="image"
                >
                  Image Link
                </label>
                <input
                  id="image"
                  type="url"
                  defaultValue={item?.image}
                  {...register("image", { required: "Image link is required" })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                />
                {errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  id="category"
                  defaultValue={item?.category || ""}
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                >
                  <option value="" disabled>
                    Filter by Category
                  </option>
                  <option value="DSLR">DSLR</option>
                  <option value="Mirrorless">Mirrorless</option>
                  <option value="Compact">Compact</option>
                  <option value="Bridge Cameras">Bridge Cameras</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Price Input */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  defaultValue={item?.price}
                  {...register("price", { required: "Price is required" })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            {/* Discount Input */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="brand"
                >
                  Brand
                </label>
                <select
                  id="brand"
                  defaultValue={item?.brand || ""}
                  {...register("brand", { required: "Brand is required" })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                >
                  <option value="" disabled>
                    Filter by Brand
                  </option>
                  <option value="Canon">Canon</option>
                  <option value="Nikon">Nikon</option>
                  <option value="Sony">Sony</option>
                  <option value="Fujifilm">Samsung</option>
                </select>
                {errors.brand && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.brand.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="discount"
                >
                  Discount (%)
                </label>
                <input
                  id="discount"
                  type="number"
                  defaultValue={item?.discount}
                  {...register("discount", {
                    min: { value: 0, message: "Discount cannot be negative" },
                    max: { value: 100, message: "Discount cannot exceed 100%" },
                  })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                />
                {errors.discount && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.discount.message}
                  </p>
                )}
              </div>

              {/* Stock Input */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-1"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  id="stock"
                  type="number"
                  defaultValue={item?.stock}
                  {...register("stock", { required: "Stock is required" })}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                />
                {errors.stock && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.stock.message}
                  </p>
                )}
              </div>
            </div>

            {/* Description Input */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-300 mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                defaultValue={item?.description}
                {...register("description")}
                className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-300"
                rows="4"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 font-medium transition duration-300 text-sm shadow-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

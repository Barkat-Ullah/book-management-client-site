import { useNavigate, useParams } from "react-router";
import moment from "moment";
import { useAppSelector } from "../redux/hooks";
import { useCurrentUser } from "../redux/features/Auth/authSlice";

import { message } from "antd";
import { useGetSingleProductQuery } from "../redux/features/product/productManagementApi";
import { useAddToCartMutation } from "../redux/features/product/cartApi";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: productData, isLoading } = useGetSingleProductQuery(id);
  const user = useAppSelector(useCurrentUser);
  const [addToCart] = useAddToCartMutation();

  const product = productData?.data;

  const handleAddToCart = async () => {
    if (user) {
      const cartItem = {
        productId: product?._id,
        quantity: 1,
        image: product?.image,
      };

      try {
        await addToCart(cartItem).unwrap();

        message.success("Product added to cart successfully!");
      } catch (err) {
        console.error("Failed to add item to cart: ", err);
        message.error("Failed to add item to cart.");
      }
    }
  };

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className=" my-4 lg:my-20 flex flex-col max-w-sm lg:max-w-6xl mx-auto overflow-hidden bg-white rounded shadow-md sm:flex-row text-slate-500 shadow-slate-200 mt-6 px-2">
      <figure className="flex-1">
        <img
          src={product?.image || "https://picsum.photos/id/118/800/600"}
          alt={product?.title || "Product Image"}
          className="object-cover w-full h-full aspect-auto"
        />
      </figure>

      <div className="flex-1 p-6 sm:mx-6 sm:px-0">
        <header className="flex gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-700">
              {product?.title}
            </h3>
            <p className="text-sm text-slate-400">
              By {product?.author?.name || "Unknown"} -{" "}
              {moment(product?.createdAt).format("MMMM Do, YYYY")}
            </p>
          </div>
        </header>
        <p className="text-base leading-relaxed text-slate-600">
          {product?.description || "No description available."}
        </p>
        <h2 className="text-xl">Price: {product?.price} tk</h2>

        {/* Action Buttons */}
        <div className="flex mt-6 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-700 rounded shadow hover:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-gray-300 transition-all"
          >
            Back
          </button>

          <button
            onClick={handleAddToCart}
            className="px-5 py-2 text-sm font-medium text-white bg-gray-700 rounded shadow hover:bg-gray-800 focus:ring focus:ring-gray-300"
            disabled={isLoading} // Disable button while the API call is in progress
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Divider, message } from "antd";
import { useNavigate } from "react-router-dom";
import {
  useClearCartMutation,
  useFetchCartQuery,
  useRemoveItemFromCartMutation,
} from "../redux/features/product/cartApi";
import { useCreateOrderMutation } from "../redux/features/order/orderManagementApi";
import { Key } from "react";

export default function Cart() {
  const navigate = useNavigate();
  const { data: cartData } = useFetchCartQuery(undefined);
  const cart = cartData?.data?.items || [];
  const userDetails = cartData?.data?.userId;
  const [createOrder] = useCreateOrderMutation();
  const [removeItemFromCart] = useRemoveItemFromCartMutation();
  const [clearCart] = useClearCartMutation();

  const { register, handleSubmit } = useForm({
    defaultValues: cart.reduce((acc: { [x: string]: number; }, item: { productId: { _id: any; }; }) => {
      acc[`quantity-${item.productId._id}`] = 1;
      return acc;
    }, {}),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const orderData = {
      userId: userDetails?._id,
      items: cart.map((item: { productId: { _id: any; price: any; }; }) => ({
        productId: item.productId._id,
        quantity: parseInt(data[`quantity-${item.productId._id}`], 10),
        price: item.productId.price,
      })),
    };

    try {
      const res = await createOrder(orderData).unwrap();

      if (res?.data?.checkout_url) {
        window.location.href = res.data.checkout_url;
      } else {
        message.error("Checkout URL not found!");
      }

      message.success("Order created successfully!");

      await clearCart(cartData?.data?._id);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
      message.error("Failed to create order");
    }
  };

  // 🟢 Remove item function
  const handleRemoveItem = async (cartId: string, productId: string) => {
    try {
      await removeItemFromCart({ cartId, productId });
      message.success("Item removed from cart");
    } catch (error) {
      console.error(error);
      message.error("Error removing item from cart");
    }
  };

  // 🟢 If cart is empty, show message & navigate to products
  if (cart.length === 0) {
    return (
      <div className="text-center py-10 my-20 lg:my-50">
        <h2 className="text-xl font-bold text-gray-600">No items available</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 px-4 py-2 bg-black cursor-pointer text-white rounded-md"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 my-20 lg:my-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {cart.map((item: { _id: Key | null | undefined; productId: { image: any; title: any; price: any; _id: string; }; }, index: number) => (
          <div key={item._id} className="border-t border-gray-200 pt-6">
            <div className="flex">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={
                    item.productId?.image || "https://via.placeholder.com/96"
                  }
                  alt={item.productId?.title || "Product"}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      {index + 1}. {item.productId?.title || "No Title"}
                    </h3>
                    <p className="ml-4">{item.productId?.price || 0} Tk</p>
                  </div>
                </div>

                <label
                  htmlFor={`quantity-${item.productId._id}`}
                  className="mt-2 ml-auto text-sm text-gray-700"
                >
                  Quantity
                </label>
                <select
                  {...register(`quantity-${item.productId._id}`)}
                  id={`quantity-${item.productId._id}`}
                  className="my-1 ml-auto block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:border-black sm:text-sm"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>

                <div className="flex flex-1 items-end justify-between text-sm mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveItem(cartData?.data?._id, item.productId._id)
                    }
                    className="text-white border p-2 bg-red-600 rounded-full"
                  >
                    Remove
                  </button>
                  <div className="text-gray-500">In stock</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Divider />
        <div className="mt-8">
          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 cursor-pointer bg-black text-white rounded-md shadow-md hover:bg-gray-800"
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
}

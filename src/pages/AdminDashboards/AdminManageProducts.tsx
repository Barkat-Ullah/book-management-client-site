import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/features/product/productManagementApi";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/Auth/authSlice";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AdminManageProducts = () => {
  const user = useAppSelector(useCurrentUser)

  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  setUploading(true);

 
  const formData = new FormData();
  formData.append("image", data.image[0]);

  try {
    const res = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });

    const imgData = await res.json();
    if (imgData.success) {
      const imageUrl = imgData.data.url;

      // ✅ Ensure correct data types and required fields
      const formattedData = {
        title: data.title,
        author: user?.id || "", 
        price: Number(data.price), 
        category: data.category,
        description: data.description,
        quantity: Number(data.quantity),
        image: imageUrl,
      };

      // ✅ Send product data to backend
      await addProduct(formattedData);
      reset();
    } else {
      console.error("Image upload failed");
    }
  } catch (err) {
    console.error("Error uploading image", err);
  } finally {
    setUploading(false);
  }
};


  return (
    <div className="p-5 max-w-lg mx-auto border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block">Title:</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.title?.message}</p>
        </div>

        {/* Price */}
        <div>
          <label className="block">Price:</label>
          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be positive" },
            })}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.price?.message}</p>
        </div>

        {/* Category */}
        <div>
          <label className="block">Category:</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="Poetry">Poetry</option>
           
          </select>
          <p className="text-red-500">{errors.category?.message}</p>
        </div>

        {/* Description */}
        <div>
          <label className="block">Description:</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>

        {/* Quantity */}
        <div>
          <label className="block">Quantity:</label>
          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 0, message: "Quantity must be 0 or more" },
            })}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.quantity?.message}</p>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block">Upload Image:</label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.image?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading || uploading}
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>

        {error && <p className="text-red-500">Error adding product</p>}
      </form>
    </div>
  );
};

export default AdminManageProducts;

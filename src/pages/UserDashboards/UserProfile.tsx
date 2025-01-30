import type React from "react";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {
  useChangePasswordMutation,
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "../../redux/features/Auth/authApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/Auth/authSlice";
import Skeleton from "../Skeleton";
import { useNavigate } from "react-router";
import { Button, message } from "antd";
import EForm from "../../components/Form/EForm";
import EInput from "../../components/Form/EInput";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  image?: string;
}

interface ProfileFormData {
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  image?: FileList;
}

const UserProfile: React.FC = () => {
  const user = useAppSelector(useCurrentUser) as User | null;
  const { isLoading, refetch } = useGetAllUserQuery(undefined);
  const [updateUser] = useUpdateUserMutation();
  const [changePassword] = useChangePasswordMutation();
  const [uploading, setUploading] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ProfileFormData>();

  useEffect(() => {
    refetch(); // Ensuring UI updates with new user data
  }, [refetch]);

  const onSubmitted: SubmitHandler<ProfileFormData> = async (data) => {
    setUploading(true);
    try {
      let imageUrl = user?.image;

      if (data.image && data.image.length > 0) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const res = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const imgData = await res.json();
        if (imgData.success) {
          imageUrl = imgData.data.url;
        } else {
          console.error("Image upload failed");
        }
      }

      const updatedUserDetails = {
        name: data.name,
        phone: data.phone,
        address: data.address,
        city: data.city,
        image: imageUrl,
      };

      const res = await updateUser({
        id: user?.id,
        data: updatedUserDetails,
      }).unwrap();
      console.log(res);
      refetch();
      reset();
      message.success("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      message.error("Failed to update profile.");
    } finally {
      setUploading(false);
      setIsProfileModalOpen(false);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await changePassword(data).unwrap();
      if (res?.status) {
        dispatch(logout());
        navigate("/login");
        message.success("Password changed successfully!");
      }
    } catch (error) {
      message.error("Failed to change password.");
    }
  };

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h2 className="text-2xl font-semibold">User Profile</h2>
            <div className="mt-4">
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Phone:</strong> {user?.phone}
              </p>
              <p>
                <strong>City:</strong> {user?.city}
              </p>
              <p>
                <strong>Address:</strong> {user?.address}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-32 h-32 mb-4">
              <img
                src={user?.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsProfileModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
          <button
            onClick={() => setIsPasswordModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
            <form onSubmit={handleSubmit(onSubmitted)} className="space-y-4">
              <input
                type="text"
                {...register("name")}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                {...register("phone")}
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                {...register("city")}
                placeholder="City"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                {...register("address")}
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="file"
                {...register("image")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setIsProfileModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  disabled={uploading}
                >
                  {uploading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Change Password</h3>
            <EForm onSubmit={onSubmit}>
              <EInput
                type="password"
                name="oldPassword"
                label="Old Password"
                placeholder="Enter old Password"
                rules={{ required: "Old password is required" }}
              />
              <EInput
                type="password"
                name="newPassword"
                label="New Password"
                placeholder="Enter new Password"
                rules={{ required: "New password is required" }}
              />

              <div className="mt-4 gap-1 flex justify-between">
                <button
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <Button type="primary" htmlType="submit" block size="large">
                  Change Password
                </Button>
              </div>
            </EForm>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

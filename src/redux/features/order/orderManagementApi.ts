import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/orders",
        method: "POST",
        body: userInfo,
      }),
      // Tag the cache for invalidation after creating an order
      providesTags: (result) =>
        result ? [{ type: "Orders", id: result._id }] : [],
    }),

    getOrders: builder.query({
      query: () => "/orders",
      // Provides the tag for the Orders list
      providesTags: ["Orders"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ order_id, status }) => ({
        url: `/orders/${order_id}`, // Use the correct endpoint
        method: "PUT",
        body: { status },
      }),
      // Invalidates the cache for the Orders list when updating order status
      invalidatesTags: [{ type: "Orders" }],
    }),

    deleteOrder: builder.mutation({
      query: (order_id) => ({
        url: `/orders/${order_id}`, // Ensure this is correct
        method: "DELETE",
      }),
      // Invalidates the cache for the Orders list when deleting an order
      invalidatesTags: [{ type: "Orders" }],
    }),

    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
      // Optionally, you can tag the specific order for cache invalidation
      providesTags: (result) =>
        result ? [{ type: "Orders", id: result._id }] : [],
    }),
    getUserOrders: builder.query({
      query: (userId) => `/orders/user/${userId}`,
      providesTags: (result) =>
        result ? [{ type: "Orders", id: "LIST" }] : [],
    }),
  }),
  })


export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
  useVerifyOrderQuery,
  useGetUserOrdersQuery
} = orderApi;

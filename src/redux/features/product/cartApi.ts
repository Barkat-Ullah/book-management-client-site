import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCart: builder.query({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (payload) => ({
        url: "/cart/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeItemFromCart: builder.mutation({
      query: ({ cartId, productId }) => ({
        url: `/cart/${cartId}/remove/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    clearCart: builder.mutation({
      query: (cartId) => ({
        url: `/cart/${cartId}/clear`, // This is the new clear cart endpoint
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useFetchCartQuery,
  useAddToCartMutation,
  useRemoveItemFromCartMutation,
  useClearCartMutation,
} = cartApi;

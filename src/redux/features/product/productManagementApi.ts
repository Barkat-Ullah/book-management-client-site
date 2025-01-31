import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Fetch all products
    getProduct: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<any>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),

    // ✅ Fetch single product
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),

    // ✅ Create product
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/create-products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    // ✅ Delete product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"], // Cache update
    }),

    // ✅ Update product
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"], 
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation, 
  useUpdateProductMutation,
} = productManagementApi;
